





import React from 'react';
import { Container, Typography, Button } from '@mui/material';

import TextField from '@mui/material/TextField';

const Main = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        justifyContent: 'center',
  ///this code below you have to adjust your media query
        '@media (max-width: 600px)': {
          gap: '15px', // Adjust styles for screens narrower than 600px
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Centered Content
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>

      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
    </Container>
  );
};

export default Main;














































