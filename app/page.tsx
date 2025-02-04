'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Intro from './sections/intro';
import Projects from './sections/projects';
import AboutMe from './sections/about-me';
import Resume from './sections/resume';


function Home() {

  const projects = [
    {
      title: 'Project 1',
      description: 'This is the first project description.',
      // imageUrl: 'project1.jpg',
      githubLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 2',
      description: 'This is the second project description.',
      githubLink: 'https://github.com/username/project2',
    },
    // Add more projects here as needed
  ];

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
        <Intro />
        <AboutMe />
        <Resume />
        <Projects projects={projects} />
      </Box>
    </Container>
  );
}

export default Home;