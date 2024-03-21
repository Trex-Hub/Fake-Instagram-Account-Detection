import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SpaceBackground from './assets/SpaceBackgroundCompressed.mp4';
import Hero from './Hero';
import ResponsiveNavBar from './ResponsiveNavBar';

export default function Parent({ username }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />

            <Box
                id='home'
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'hidden',
                    position: 'relative',

                }}
            >
                <ResponsiveNavBar />
                <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={SpaceBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Hero />
            </Box>
        </Box>
    );
}
