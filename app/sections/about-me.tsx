import React, { forwardRef, MutableRefObject } from "react";
import { Container, Box, Typography, IconButton, Chip } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import theme from "../theme";

interface AboutMeProps {
  resumeRef: MutableRefObject<HTMLElement | null>;
}

const skillColors: { [key: string]: string } = {
  React: "#64557B",
  "Next.js": "#01796F",
  TypeScript: "#3178C6",
  Go: "#00ADD8",
  Python: "#808000",
  "C#": "#9B4F96",
  SQL: "#4479A1",
  Postgres: "#CB7876",
  MySQL: "#00758F",
  "REST APIs": "#B4CFA4",
  Docker: "#2496ED",
  Podman: "#892CA0",
  Ansible: "#8BA47C",
  Kubernetes: "#326CE5",
  "CI/CD": "#93C572",
  "GitLab CI": "#BBA6DD",
  SonarQube: "#4E9BCD",
  Fortify: "#5C2D91",
  Coverity: "#005571",
  Jest: "#99425B",
  Linux: "#2E8B57",
  Agile: "#8A9A5B",
};

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>(({ resumeRef }, ref) => {
  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      maxWidth="lg"
      id="aboutMe"
      ref={ref}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(10),
        gap: theme.spacing(6),
        "@media (max-width: 1200px)": { maxWidth: "md" },
        "@media (max-width: 900px)": { maxWidth: "sm" },
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}>
        <Typography variant="h3" sx={{ color: "#ffffff", fontWeight: "bold" }} ref={ref}>
          About Me
        </Typography>
      </Box>

      {/* About Me Section */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          mb: 3,
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Typography variant="h6" sx={{ color: "#ffffff" }}>
          Hi! I&apos;m <strong>Ben Humphries</strong>, a passionate Software Engineer with expertise in full-stack development,
          DevSecOps, and Agile methodologies. I graduated from <strong>Brigham Young University</strong> with a B.S. in
          Computer Science and a minor in Business Administration.
        </Typography>
      </Box>

      {/* Experience & Projects */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Typography variant="h4" sx={{ color: "#ffffff", fontWeight: "bold", mb: 2 }}>
          Tech Stack & Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: .5,
            marginTop: "15px"
          }}
        >
          {Object.keys(skillColors).map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                backgroundColor: skillColors[skill],
                color: "#ffffff",
                fontWeight: "bold",
                margin: "2px",
                fontSize: "1.1rem",
              }}
            />
          ))}
        </Box>

        <Typography variant="h4" sx={{ color: "#ffffff", fontWeight: "bold", my: 2 }}>
          Experience & Projects
        </Typography>
        <Typography variant="h6" sx={{ color: "#ffffff", maxWidth: "800px", mx: "auto", mb: 3 }}>
          I&apos;m currently a Software Engineer at <strong>Northrop Grumman</strong>. I started as an Associate Software Engineer on a DevSecOps team,
          developing CI/CD pipelines, build scripts, and containerized applications. Later, I took on a Scrum Master role, refining my leadership skills.
          After just 18 months, I was promoted to Software Engineer, where I lead the development of multiple web applications for managing software
          deployment and automation. My contributions have been recognized with multiple awards.
        </Typography>
        <Typography variant="h6" sx={{ color: "#ffffff", maxWidth: "800px", mx: "auto", mb: 3 }}>
          Previously, at <strong>BYU</strong>, I worked as a Software Developer for the College of Life Sciences, creating and maintaining applications
          in React and C#. As Team Lead, I managed code reviews, created user stories, and built a Vue-based system to digitize the college’s
          graduate contract process.
        </Typography>
        <Typography variant="h6" sx={{ color: "#ffffff", maxWidth: "800px", mx: "auto" }}>
          For my capstone, I collaborated with <strong>Partners Personnel</strong> to develop a Django-based payroll application that automated
          pay card processing, significantly increasing efficiency.
        </Typography>
      </Box>

      {/* Bottom Arrow Button */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          marginTop: "auto",
          marginBottom: "-3vh",
        }}
      >
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
          0%, 50%, 100% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          75% { transform: translateY(-5px); }
        }
      `}</style>
    </Container>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
