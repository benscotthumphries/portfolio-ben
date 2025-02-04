import React, { useState, useEffect, forwardRef } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typewriter from "../components/typewriter";
import { useTheme } from '@mui/material/styles';

interface IntroProps {
  // You can define additional props here if needed
}

const Intro = forwardRef<HTMLDivElement, IntroProps>((props, ref) => {
  const theme = useTheme();
  const words = ["Software Engineer", "Leader", "Husband", "Innovator"];
  const [isBouncing, setIsBouncing] = useState(true);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("aboutMe");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsBouncing(false);
      } else {
        setIsBouncing(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      maxWidth="md"
      ref={ref}
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "8vh",
      }}
    >
      <Box
        sx={{
          width: "30vw",
          height: "30vw",
          maxWidth: 400,
          maxHeight: 400,
          borderRadius: "50%",
          border: `5px solid ${theme.palette.primary.main}`,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "-5vh",
          mb: "3vh",
        }}
      >
        <Box
          component="img"
          src="professionalPic.jpg"
          alt="Ben Humphries"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Typography variant="h3" sx={{ color: theme.palette.text.primary, fontWeight: "bold", mb: "1.5vh" }}>
        Ben Humphries
      </Typography>

      <Box sx={{ minHeight: "60px" }}>
        <Typewriter words={words} />
      </Box>

      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "20px",
          mt: "3vh",
          mb: "10vh",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
          I&apos;m a dedicated Software Engineer with a passion for creating innovative solutions.
          With years of experience in software development, I&apos;ve worked on building websites,
          developing DevSecOps tools, and managing containers and CI/CD pipelines.
          When I&apos;m not coding, I love exploring new technologies, spending time outdoors, or enjoying moments with my family.
        </Typography>
      </Box>

      <Box sx={{ position: "absolute", bottom: "20px", cursor: "pointer" }}>
        <IconButton
          onClick={scrollToNextSection}
          sx={{
            animation: isBouncing ? "bounce 1.5s infinite" : "none",
            color: theme.palette.primary.main,
          }}
        >
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Box>

      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0);
          }
          75% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  );
});

// Set displayName for better debugging in React DevTools
Intro.displayName = 'Intro';

export default Intro;
