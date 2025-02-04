'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Intro from './sections/intro';
import AboutMe from './sections/about-me';
import Resume from './sections/resume';

function Home() {
  const resumeRef = React.useRef(null);
  const aboutMeRef = React.useRef(null);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Intro ref={aboutMeRef} />
        <AboutMe resumeRef={resumeRef} ref={aboutMeRef} />
        <Resume ref={resumeRef} />
      </Box>
    </Container>
  );
}

export default Home;
