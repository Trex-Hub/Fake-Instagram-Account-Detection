import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Account Details', 'Report', 'FAQ'];

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function ResponsiveNavBar() {
  const gradientStyle = {
    background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (pageId) => {
    scrollToElement(pageId);
    handleClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="responsive-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{ display: { md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleClick(page.toLowerCase().replace(' ', '-'))}>
                  {page}
                </MenuItem>
              ))}
            </Menu>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ...gradientStyle,
                fontFamily: '"Lexend Deca", sans-serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                lineHeight: [2.25, 2.25, 1.5],
              }}
            >
              Dev's Den
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page.toLowerCase().replace(' ', '-'))}
                sx={{
                  mx: 2,
                  color: '#808080',
                  fontFamily: '"Lexend Deca", sans-serif',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
