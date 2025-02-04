import React, { useState, useEffect } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from "next/image";

function AboutMe() {
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
        padding: "2rem",
        position: "relative",  // Make sure the container is relative to position the button
      }}
    >
      {/* About Me Header */}
      <Typography variant="h3" sx={{ color: "#009688", fontWeight: "bold", mb: 3 }}>
        About Me
      </Typography>

      {/* Short Introduction */}
      <Typography variant="body1" sx={{ color: "#ffffff", mb: 3, maxWidth: "800px" }}>
        Hey there! I&apos;m <strong>Ben Humphries</strong>, a Software Engineer passionate about creating innovative
        and scalable solutions. I thrive in fast-paced environments, optimizing workflows, and mentoring others
        to reach their full potential. With experience in front-end, back-end, and cloud-based development,
        I build tools that make a difference.
      </Typography>

      {/* Work & Experience Images */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", mb: 3 }}>
        <Image src="/coding.jpg" alt="Coding" width={200} height={200} style={{ borderRadius: "10px" }} />
        <Image src="/teamwork.jpg" alt="Teamwork" width={200} height={200} style={{ borderRadius: "10px" }} />
        <Image src="/scuba.jpg" alt="Scuba Diving" width={200} height={200} style={{ borderRadius: "10px" }} />
      </Box>

      {/* Scroll Down Arrow Button */}
      <Box sx={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", cursor: "pointer", zIndex: 10 }}>
        <IconButton
          onClick={scrollToNextSection}
          sx={{
            animation: isBouncing ? "bounce 1.5s infinite" : "none",
            color: "#009688",
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

export default AboutMe;
