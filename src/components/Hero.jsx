import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RowAndColumnSpacing from './ProfileContent';
import Button from '@mui/material/Button';
import CustomTextField from './CustomTextField';
import FAQ from './FAQ';
import ReportHere from './ReportHere';
import { sanitizeInput } from './utils';
import Footer from './footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const customFont = {
  fontFamily: '"Lexend Deca", sans-serif',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal'
};

const instaColor = {
  background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const gradientStyle = {
  background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

function Hero() {
  const [username, setUsername] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  let variant = "h4"; // Default variant
  if (isSmallScreen) {
    variant = "h4"; // Change variant for small screens
  } else if (isMediumScreen) {
    variant = "h3"; // Change variant for medium screens
  } else {
    variant = "h3"; // Change variant for large screens
  }
  let variantTwo = "h5"
  if (isSmallScreen) {
    variantTwo = "h6"; // Change variant for small screens
  } else if (isMediumScreen) {
    variantTwo = "h5"; // Change variant for medium screens
  } else {
    variantTwo = "h5"; // Change variant for large screens
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const validateUsername = () => {
    if (!username.trim()) {
      setUsernameError('Username cannot be empty');
      return false;
    }
    if (username.length > 30) {
      setUsernameError('Username cannot be longer than 30 characters');
      return false;
    }
    // Additional validation to prevent XSS and SQL Injection
    if (!sanitizeInput(username)) {
      setUsernameError('Invalid characters in the username');
      return false;
    }
    return true;
  };

  const handleSearchClick = () => {
    if (validateUsername()) {
      setSearchClicked(true);
    }
  };

  const inputStyles = {
    input: {
      color: 'whitesmoke',
      '&::placeholder': {
        color: 'white',
      },
      '&:-webkit-input-placeholder': {
        color: 'white',
      },
      '&::-moz-placeholder': {
        color: 'white',
        opacity: 1,
      },
      '&:-ms-input-placeholder': {
        color: 'white',
      },
      '&:focus': {
        borderColor: 'white !important',
      },
    },
  };

  return (
    <div style={{ backgroundColor: '' }}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant={variant} gutterBottom style={{ ...customFont, fontWeight: 600, marginBottom: '0.3rem', marginTop: '12rem', color: 'whitesmoke' }}>
          Social Media Profile
        </Typography>
        <Typography variant={variant} gutterBottom style={{ ...customFont, fontWeight: 600, marginBottom: '1rem', marginTop: '0.3rem', color: 'whitesmoke' }}>
          <span style={gradientStyle}>
            Authentication {' '}
          </span>
          Portal
        </Typography>
        <Typography variant={variantTwo} gutterBottom style={{ ...customFont, fontWeight: 500, marginBottom: '12rem', color: 'whitesmoke' }}>
          Let's Secure your online identity
        </Typography>
        <Box noValidate display="flex" justifyContent="center" marginBottom={17} marginTop={10}>
          <CustomTextField
            label="Enter Username"
            id="username"
            style={{ ...inputStyles, width: '40%', marginRight: '10px' }}
            value={username}
            error={!!usernameError}
            helperText={usernameError}
            onChange={handleUsernameChange}
            InputLabelProps={{
              style: { color: 'whitesmoke' }
            }}
            InputProps={{
              style: inputStyles.input,
            }}
          />
          <form action="" method='POST'>
            <Button variant="contained" onClick={handleSearchClick} style={{ ...instaColor, width: '12vw', lineHeight: '2.5' }}>Search</Button>
          </form>
        </Box>
      </div>
      <Box display="flex" justifyContent="center">
        <RowAndColumnSpacing username={username} searchClicked={searchClicked} />
      </Box>
      <div id="Report" style={{ backgroundColor: 'white' }}>
        <ReportHere />
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
