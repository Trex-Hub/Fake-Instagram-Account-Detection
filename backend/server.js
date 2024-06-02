const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { DateTime } = require('luxon');
const { ApifyClient } = require('apify-client');
const cors = require('cors')
const app = express();
const PORT = 8000;

const APIFY_TOKEN = "apify_api_1ARMClTZxP9VYafbeEJyhoBMlj1DMY104rvI";
const RAPIDAPI_KEY = "e7f93e7eecmshb025767d39d0611p10a1d3jsnc1cdb354d681";

app.use(cors());

const fetchInstagramData = async (username) => {
    // Fetch Instagram data using Apify
    const client = new ApifyClient({ token: APIFY_TOKEN });
    const actorCallInput = { usernames: [username] };

    const run = await client.actor('apify/instagram-profile-scraper').call(actorCallInput);

    const datasetId = run.defaultDatasetId;
    const dataset = await client.dataset(datasetId);
    const items = await dataset.listItems();

    const filteredData = items.items.map(item => ({
        id: item.id,
        fullName: item.fullName,
        biography: item.biography,
        followersCount: item.followersCount,
        followsCount: item.followsCount,
        private: item.private,
        verified: item.verified,
        profilePicUrlHD: item.profilePicUrlHD,
        postsCount: item.postsCount,
        highlightReelCount: item.highlightReelCount,
        igtvVideoCount: item.igtvVideoCount
    }));

    if (!filteredData.length) {
        console.log("Failed to retrieve data from Apify.");
        return null;
    }

    const userId = filteredData[0].id;

    // Fetch additional data from RapidAPI
    const url = `https://instagram-api-20231.p.rapidapi.com/api/get_user_country/${userId}`;
    const headers = {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "instagram-api-20231.p.rapidapi.com"
    };

    const response = await axios.get(url, { headers });

    if (response.status === 200) {
        const data = response.data;
        const aboutCountry = data.data.about_this_account_country;
        const dateJoined = data.data.date_joined;

        const combinedData = {
            instagramData: filteredData,
            aboutThisAccountCountry: aboutCountry,
            dateJoined: dateJoined
        };

        const instagramUserData = combinedData.instagramData[0];
        const instagramUser = {
            id: instagramUserData.id,
            full_name: instagramUserData.fullName,
            biography: instagramUserData.biography,
            followers_count: instagramUserData.followersCount,
            follows_count: instagramUserData.followsCount,
            is_private: instagramUserData.private,
            is_verified: instagramUserData.verified,
            profile_pic_url_hd: instagramUserData.profilePicUrlHD,
            posts_count: instagramUserData.postsCount,
            highlight_reel_count: instagramUserData.highlightReelCount,
            igtv_video_count: instagramUserData.igtvVideoCount,
            about_this_account_country: combinedData.aboutThisAccountCountry,
            date_joined: DateTime.fromFormat(combinedData.dateJoined, 'MMMM yyyy').toISO()
        };

        return instagramUser;
    } else {
        console.log("Failed to retrieve data from RapidAPI. Status code:", response.status);
        return null;
    }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to fetch Instagram data
app.post('/fetch-instagram', async (req, res) => {
    const { username } = req.body;
    try {
        const instagramUser = await fetchInstagramData(username);
        if (instagramUser) {
            res.json(instagramUser);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error("Error fetching Instagram data:", error);
        res.sendStatus(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
