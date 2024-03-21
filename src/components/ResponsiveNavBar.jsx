import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';

const pages = ['Home', 'Account Details', 'Report', 'FAQ'];
const gradientStyle = {
  background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function ResponsiveNavBar() {
  const handleClick = (pageId) => {
    scrollToElement(pageId);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'start' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: '"Lexend Deca", sans-serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                ...gradientStyle,
              }}
            >
              Dev's Den
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page.toLowerCase().replace(' ', '-'))}
                sx={{
                  mx: 2,
                  color: '#808080',
                  padding: '6px 12px',
                  fontSize: '1.1rem',
                  background: 'black',
                  fontFamily: '"Lexend Deca", sans-serif',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                {page}
              </Button>
            ))}
            <AccountCircle sx={{
              color: '#808080',
              fontSize: '35px',
              '&:hover': {
                color: 'white',
              },
            }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
