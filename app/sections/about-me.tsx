import React, { useState, forwardRef, MutableRefObject, useEffect } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import theme from "../theme";

// Update the props typing to accept both ref and resumeRef with a more specific type
interface AboutMeProps {
  resumeRef: MutableRefObject<HTMLElement | null>; // Change to HTMLElement | null to allow DOM methods
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const { resumeRef } = props;  // Destructure resumeRef from props
  const [isBouncing, setIsBouncing] = useState(true);

  const scrollToResume = () => {
    // Check if resumeRef.current is not null and call scrollIntoView
    resumeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      maxWidth="md"
      id="aboutMe"
      ref={ref}
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      <Typography variant="h3" sx={{ color: "#ffffff", fontWeight: "bold", mb: 3 }}>
        About Me
      </Typography>

      <Typography variant="body1" sx={{ color: "#ffffff", mb: 3, maxWidth: "800px" }}>
        Hey there! I&apos;m <strong>Ben Humphries</strong>, a Software Engineer passionate about creating innovative
        and scalable solutions. I thrive in fast-paced environments, optimizing workflows, and mentoring others
        to reach their full potential. With experience in front-end, back-end, and cloud-based development,
        I build tools that make a difference.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", mb: 3 }}>
        <Image src="/coding.jpg" alt="Coding" width={200} height={200} style={{ borderRadius: "10px" }} />
        <Image src="/teamwork.jpg" alt="Teamwork" width={200} height={200} style={{ borderRadius: "10px" }} />
        <Image src="/scuba.jpg" alt="Scuba Diving" width={200} height={200} style={{ borderRadius: "10px" }} />
      </Box>

      {/* Bottom Arrow Button */}
      <Box sx={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", cursor: "pointer", zIndex: 10 }}>
        <IconButton
          onClick={scrollToResume}
          sx={{
            animation: "bounce 1.5s infinite",
            color: theme.palette.primary.main,
          }}
        >
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Bounce Animation */}
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
AboutMe.displayName = 'AboutMe';

export default AboutMe;
