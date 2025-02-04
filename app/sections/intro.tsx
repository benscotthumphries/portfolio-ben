"use client";
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typewriter from "../components/typewriter";
import { useTheme } from '@mui/material/styles';

function Intro() {
  const words = ["Software Engineer", "Leader", "Husband", "Innovator"];
  const [isBouncing, setIsBouncing] = useState(true);

  // Scroll function
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section (below the fold)
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Handle scroll event to stop bouncing after a certain scroll position
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
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "8vh", // Slightly reduce padding-top to raise the content
      }}
    >
      {/* Profile Picture */}
      <Box
        sx={{
          width: "30vw", // 30% of viewport width
          height: "30vw", // 30% of viewport width to maintain a square shape
          maxWidth: 400, // Max size for large screens
          maxHeight: 400, // Max size for large screens
          borderRadius: "50%",
          border: `5px solid ${useTheme().palette.primary.main}`,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "-5vh", // Slightly raise the picture
          mb: "3vh", // Reduced space between picture and name
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

      {/* Name */}
      <Typography variant="h3" sx={{ color: useTheme().palette.text.primary, fontWeight: "bold", mb: "1.5vh" }}>
        Ben Humphries
      </Typography>

      {/* Typewriter Effect */}
      <Box sx={{ minHeight: "60px" }}>
        <Typewriter words={words} />
      </Box>

      {/* Intro Who Am I? */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "20px",
          mt: "3vh", // Reduced space between typewriter and description
          mb: "10vh", // Reduced space between description and scroll button
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ color: useTheme().palette.text.primary }}>
          I&apos;m a dedicated Software Engineer with a passion for creating innovative solutions.
          With years of experience in software development, I&apos;ve worked on building websites,
          developing DevSecOps tools, and managing containers and CI/CD pipelines.
          When I&apos;m not coding, I love exploring new technologies, spending time outdoors, or enjoying moments with my family.
        </Typography>
      </Box>

      {/* Scroll Down Arrow Button */}
      <Box sx={{ position: "absolute", bottom: "20px", cursor: "pointer" }}>
        <IconButton
          onClick={scrollToNextSection}
          sx={{
            animation: isBouncing ? "bounce 1.5s infinite" : "none",
            color: useTheme().palette.primary.main,
          }}
        >
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Bouncing Animation */}
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
}

export default Intro;
