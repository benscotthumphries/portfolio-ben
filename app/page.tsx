'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Intro from './sections/intro';
import AboutMe from './sections/about-me';
import Resume from './sections/resume';
import { Divider } from '@mui/material';

const steps = ['Intro', 'About Me', 'Resume'];

function Home() {
  const introRef = React.useRef<HTMLDivElement>(null);
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const resumeRef = React.useRef<HTMLDivElement>(null);

  // Use media query to detect mobile and tablet screens (max-width: 1024px)
  const isMobileOrTablet = useMediaQuery('(max-width:1024px)');
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Stable references array for sections
  const sectionRefs = React.useMemo(() => [introRef, aboutMeRef, resumeRef], []);

  // Scroll to the given section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, index: number) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveStep(index);
    }
  };

  // Handle scroll events
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Mark the page as loaded when all components are ready
  React.useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Sidebar Navigation - Hidden on Mobile and Tablet */}
        {!isMobileOrTablet && isLoaded && (
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              right: 30,
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              zIndex: 10,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out', // Smooth fade-in effect
            }}
          >
            <Stepper orientation="vertical" activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    onClick={() => scrollToSection(sectionRefs[index], index)}
                    sx={{
                      cursor: 'pointer',
                      '& .MuiStepLabel-label': {
                        fontWeight: activeStep === index ? 'bold' : 'normal',
                        color: activeStep === index ? 'white' : 'text.secondary',
                        fontSize: activeStep === index ? '1.25rem' : '1rem',
                        transition: 'font-size 0.3s ease',
                      },
                      '& .MuiStepIcon-root': {
                        color: activeStep === index ? 'white' : 'text.secondary',
                      },
                      '& .MuiStepIcon-text': {
                        fill: activeStep === index ? 'white' : 'text.primary',
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        )}

        {/* Main Content */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          <div id="intro" ref={introRef}>
            <Intro />
            <Divider sx={{ my: 3, borderColor: '#ffffff' }} />
          </div>
          <div id="aboutMe" ref={aboutMeRef}>
            <AboutMe resumeRef={resumeRef} />
            <Divider sx={{ my: 3, borderColor: '#ffffff' }} />
          </div>
          <div id="resume" ref={resumeRef}>
            <Resume />
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
