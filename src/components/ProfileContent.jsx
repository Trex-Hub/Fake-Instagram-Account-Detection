import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Gauge from 'react-svg-gauge';
import Paper from '@mui/material/Paper';
import ProfileGridItem from './ProfileGridItem';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2';
import StyledSpan from './StyledSpan';


const FlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    boxShadow: 'none',
    // border: '2px solid black',
    background: ''
}));

function RowAndColumnSpacing({ username, searchClicked }) {
    const [updatedUsername, setUpdatedUsername] = useState(username);
    useEffect(() => {
        if (searchClicked) {
            setUpdatedUsername(username);
        }
    }, [searchClicked, username]);

    const gaugeValue = 9;
    useEffect(() => {
        if (gaugeValue < 5) {
            Swal.fire({

                icon: 'error',
                title: 'Low Authenticty Detected',
                html: `You can report it to, <a href="https://mumbaipolice.gov.in/OnlineComplaints?ps_id=0" target="_blank">Mumbai Police</a>, <a href="https://cybercrime.gov.in/Accept.aspx" target="_blank"> CyberCrime Portal</a> and <a href="https://www.instagram.com/hacked/" target="_blank"> Instagram Support </a>`,
                confirmButtonText: 'OK',
            });
        }
    }, [gaugeValue]);



    const getColor = (value) => {
        const red = Math.round((1 - value / 10) * 255);
        const green = Math.round((value / 10) * 255);
        return `rgb(${red}, ${green}, 0, 0.5)`;
    };
    const topLabelStyle = {
        fontWeight: '700',
        // color: 'red'

    }
    const valueLabelStyle = {
        fontWeight: '600',
    }
    const defaultFollowerCount = 0;
    const defaultFollowingCount = 0;
    const defaultPostCount = 0;
    const defaultProfileBio = ' ';
    const dateOfJoining = '';

    const textStyle = {
        fontSize: '16px',
        // fontWeight: '',
    };

    const fourRemPadding = {
        paddingRight: ['0rem', '1.6rem', '3.6rem'],
        // paddingLeft: '4.5rem'
        paddingLeft: ['0rem', '1.6rem', '3.6rem'],
        // border: '1px solid black'
    }
    return (
        <Box id='account-details' sx={{ ...fourRemPadding, width: '100%', backgroundColor: '#F8F7F4', paddingBottom: '1.4rem', paddingTop: '2rem', borderBottom: '1px dashed', height: ['100%', '100%', '100vh '] }}>

            <Typography variant='h4' fontWeight={'700'} marginTop={10} marginBottom={6} sx={{ color: '#7880B5' }} align='center'> Account Details</Typography>

            <Grid container spacing={2} backgroundColor='#F8F7F4' width='100%' ml='0' borderRadius='2rem'
                sx={{
                    justifyContent: ['center', 'center', 'flex-start'],
                    alignItems: ['center', 'center', 'flex-start'],
                }}
            >
                <Grid item xs={12} md={6}>
                    <Item sx={{ borderRadius: '2rem', backgroundColor: 'transparent' }}>
                        <FlexContainer sx={{ display: 'flex', flexDirection: ['column', 'row', 'row'], justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar
                                alt="Avatar"
                                src=""
                                sx={{
                                    width: '170px',
                                    height: '170px',
                                    border: '3px solid black',
                                    '@media (max-width: 1200px)': {
                                        width: '120px',
                                        height: '120px',
                                    },
                                    '@media (max-width: 768px)': {
                                        width: '80px',
                                        height: '80px',
                                    }
                                }}
                            />


                            <StyledSpan>
                                @{updatedUsername}
                            </StyledSpan>

                        </FlexContainer>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ borderRadius: '2rem', backgroundColor: 'transparent' }}>
                        <Gauge
                            value={gaugeValue}
                            width={200}
                            height={180}
                            min={0}
                            max={10}
                            color={getColor(gaugeValue)}
                            label='Authenticity'
                            topLabelStyle={topLabelStyle}
                            valueLabelStyle={valueLabelStyle}
                        />
                    </Item>
                </Grid>
            </Grid>



            <Box sx={{ width: '100%', marginTop: '2.4rem', }}>
                <Grid container spacing={3}  >
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Profile Bio" value={defaultProfileBio} style={textStyle} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Date of Joining" value={dateOfJoining} style={textStyle} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Follower Count" value={defaultFollowerCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Following Count" value={defaultFollowingCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Post Count" value={defaultPostCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileGridItem label="Private Account" value={String(false).charAt(0).toUpperCase() + String(false).slice(1)} style={textStyle} />
                    </Grid>
                </Grid>
            </Box>
            <div id="report"></div>
        </Box >
    );
}

export default RowAndColumnSpacing;
