import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';

const CourseBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#002B5B', // Dark blue background
        padding: '50px 20px',
        color: 'white',
        borderRadius: '8px',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#FFC107', fontWeight: 'bold' }}
          >
            ON-DEMAND COURSE
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', margin: '20px 0' }}
          >
            Complete Python Masterclass for Web Development
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '30px' }}>
            Amet facilisi phasellus lacus, sit massa, erat placerat aenean
            aliquet ultrices eleifend enim enim lacus elit.
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFC107',
                color: '#002B5B',
                fontWeight: 'bold',
                borderRadius: '20px',
                marginRight: '10px',
                padding: '10px 20px',
              }}
            >
              Start Course
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '20px',
                padding: '10px 20px',
              }}
            >
              View All Courses
            </Button>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="/path/to/your/image.png" // Replace with your image path
              alt="Course Image"
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FFC107',
                borderRadius: '50%',
                padding: '10px',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#002B5B',
                  fontSize: '2rem',
                }}
              >
                ▶️
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseBanner;
