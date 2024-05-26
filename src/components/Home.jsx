import React from 'react';
import Navbar from './Navbar'; // Adjust the import path if necessary
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/backgroundImage.webp'; // Adjust the path as needed

const Home = () => {
    return (
      <Box>
        <Navbar />
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px',
            width: '100%',
            position: 'relative',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 10,
            }}
          >
            <Navbar />
          </Box>
          <Typography variant="h2" sx={{ mt: 10 }}>
            Welcome to Sirius Sports Academy
          </Typography>
        </Box>
  
        <Container>
          <Box id="programs" sx={{ backgroundColor: 'white', padding: '20px', mt: 4 }}>
            <Typography variant="h4">Programs Section</Typography>
            <Typography variant="body1">Details about programs...</Typography>
          </Box>
          <Box id="schedule" sx={{ backgroundColor: 'white', padding: '20px', mt: 4 }}>
            <Typography variant="h4">Schedule Section</Typography>
            <Typography variant="body1">Details about schedule...</Typography>
          </Box>
          <Box id="fees" sx={{ backgroundColor: 'white', padding: '20px', mt: 4 }}>
            <Typography variant="h4">Fees Section</Typography>
            <Typography variant="body1">Details about fees...</Typography>
          </Box>
          <Box id="registration" sx={{ backgroundColor: 'white', padding: '20px', mt: 4 }}>
            <Typography variant="h4">Registration Section</Typography>
            <Typography variant="body1">Registration form...</Typography>
          </Box>
        </Container>
      </Box>
    );
  };
  



export default Home;
