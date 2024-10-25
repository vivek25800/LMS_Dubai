import React from 'react'
import './LandingPage.css';
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const courses = [
    {
      id: 1,
      title: 'HTML 5 Web Component Fundamentals',
      level: 'Beginner',
      time: '2h 24m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-03.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Mastering CSS 3 Flexbox With Real World Projects',
      level: 'Beginner',
      time: '3h 18m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-02.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Full Stack Web Development with React Hooks and Redux',
      level: 'Intermediate',
      time: '4h 36m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-01.jpg', // Replace with actual image URL
    },
  ];

function LandingPage() {
  return (
    <div>

        <div className='landing-page-container'>
            <Box className='navbar-box' >
                <div className='logo-div'>
                    <h4>Landing Page</h4>
                </div>
                <div className='navbar-options'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <Button className='start-learning-btn'>Start Learning</Button>
                </div>
            </Box>

            <Box className='content-media-div'>
                <div className='left-side-content'>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: '#FFC107', fontWeight: 'bold' }}
                    >
                        ON-DEMAND COURSE
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 'bold', margin: '20px 0', color: '#ffffff' }}
                    >
                        Complete Python Masterclass for Web Development
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '30px', color: '#ffffff' }}>
                        Amet facilisi phasellus lacus, sit massa, erat placerat aenean
                        aliquet ultrices eleifend enim enim lacus elit.
                    </Typography>

                    <Box className='buttons-section'>
                        <Button>Start Course</Button>
                        <Button><i class="fa-solid fa-arrow-right" style={{marginRight:'10px'}}></i>  View All Course</Button>
                    </Box>
                </div>
                <div className='right-side-content'>
                    <div className='player-media'>
                        <Button className='player-btn'><i class="fa-solid fa-play"></i></Button>
                    </div>
                </div>
            </Box>
        </div>

        <div className='joined-customers-div'>
                <div class="partners-logo-slider">
                    <h4 class="sliderTitle">Join 2,300+ customers that already love collaborative learning</h4>
                        <div class="slide-track">
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                        </div>
                    </div>
        </div>

        <div className="course-card-landing">
                <div className="course-card-image">
                    <img
                    src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-video.jpg" // Replace with the correct path
                    alt="Python Course Display"
                    />
                </div>
                <div className="course-card-content">
                    <h5 className="featured">FEATURED COURSE</h5>
                    <h1>Getting Started With Python 3 for Beginners</h1>
                    <p>
                    Nibh enim nisi amet et nunc varius facilisis nulla non urna pulvinar
                    felis, faucibus id placerat.
                    </p>
                    <ul className="features-list">
                    <li><i class="fa-solid fa-circle-check"></i> Fundamental</li>
                    <li><i class="fa-solid fa-circle-check"></i> Conditional branching</li>
                    <li><i class="fa-solid fa-circle-check"></i> Input and output</li>
                    <li><i class="fa-solid fa-circle-check"></i> 8+ more lessons</li>
                    </ul>
                    <button className="start-course-btn">Start Course</button>
                </div>
            </div>

            <div className="course-card-grid-container">
            {courses.map((course) => (
                <div key={course.id} className="course-card-grid">
                <img src={course.image} alt={course.title} className="course-card-grid-image" />
                <div className="course-card-grid-content">
                    <p className="category">{course.category}</p>
                    <h3>{course.title}</h3>
                    <div className="course-meta">
                    <span className="level"><i class="fa-solid fa-user"></i> {course.level}</span>
                    <span className="time">⏳ {course.time}</span>
                </div>
                <Button className='explore-btn'>Explore <TrendingFlatIcon/></Button>
                </div>
                </div>
            ))}
            </div>
            <div className='explore-more-courses-div'>
                <Button className='more-courses-btn'>Explore More Courses <TrendingFlatIcon/> </Button>
            </div>


            <div className="custom-section">
      <div className="content">
        <h1>We Provide All Facilities For Better Work Environment</h1>
        <p>
          A descriptive paragraph that tells clients how good you are and proves that you are the best choice they've made.
          This paragraph is for those looking for a reliable co-working space.
        </p>
        <div className="features">
          <div className="feature-item">
            <i className="icon">📦</i>
            <p>Flexible Private Office</p>
          </div>
          <div className="feature-item">
            <i className="icon">📐</i>
            <p>Fully Custom Space</p>
          </div>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="image-section">
        <img src="https://websitedemos.net/co-working-space-02/wp-content/uploads/sites/65/elementor/thumbs/facilites-orx0y86134elij5tx2trgmxax99mrfxixavma26y3k.jpg" alt="Work Environment" />
        <div className="overlay-card">
          <h4>Anything You Need</h4>
          <p>This is a short description elaborating the service you have mentioned above.</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default LandingPage
