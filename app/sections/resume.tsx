import React, { forwardRef } from 'react';
import { Typography, Box, IconButton, Paper, Tooltip } from '@mui/material';
import GetAppIcon from "@mui/icons-material/GetApp";

const Resume = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <>
      {/* Header with "My Resume" centered */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 4 }}>
        <Typography variant="h3" sx={{ color: "#ffffff", fontWeight: "bold" }} ref={ref}>
          My Resume
        </Typography>
      </Box>

      {/* Resume content */}
      <Paper sx={{
        padding: "1.5rem",
        backgroundColor: "rgba(18, 18, 18, 0.9)", // Slightly lighter than pure black with opacity
        color: "#ffffff",
        borderRadius: "10px",
        mb: 2,
        textAlign: "left",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Soft shadow around the Paper
      }}>
        {/* Download Button positioned inside the Paper, aligned with resume content */}
        <Box sx={{ position: "absolute", top: "20px", right: "20px" }}>
          <Tooltip title="Download My Resume">
            <IconButton
              href="/humphries.benjamin.pdf"
              target="_blank"
              download="humphries.benjamin.pdf"  // Explicitly set download filename
              sx={{
                backgroundColor: "#009688",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "50%",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                '&:hover': {
                  backgroundColor: "#00796b",
                  animation: 'bounce 0.6s ease-in-out',
                },
              }}
            >
              <GetAppIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Contact Information */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
          Ben Humphries
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
          benscotthumphries@gmail.com | (505) 459-3819
        </Typography>

        {/* Education */}
        <Typography variant="h6" sx={{ color: "#009688", fontWeight: "bold", mt: 3 }}>
          Education
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Brigham Young University</strong>  (Aug. 2018 - Apr. 2023)
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - B.S. in Computer Science with an emphasis in Software Engineering
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Minor in Business Administration
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - GPA: 3.55
        </Typography>

        {/* Work Experience */}
        <Typography variant="h6" sx={{ color: "#009688", fontWeight: "bold", mt: 3 }}>
          Professional Experience
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", fontWeight: "bold" }}>
          Northrop Grumman - Software Engineer (Oct 2024 - Present)
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Developed a web-based tool to automate software deployment onto appropriate hardware in testing labs, streamlining workflows.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Designed a user-friendly interface for managing and updating a PostgreSQL database, improving data accessibility.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Led agile teams as a Scrum Master, mentoring engineers and ensuring project milestones.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", fontWeight: "bold" }}>
          Northrop Grumman - Associate Software Engineer (June 2023 - Oct 2024)
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Built a web application using React and Go to coordinate artifact delivery and optimize testing lab workflows.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Developed secure and reusable Docker/Podman images for streamlined software deployment.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Automated pipelines via GitLab for CI/CD efficiency.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Created Ansible scripts for infrastructure automation, reducing setup times.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", fontWeight: "bold" }}>
          Brigham Young University - Full-Stack Software Engineer (Jul 2021 - Apr 2023)
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Developed Vue & C# applications for managing graduate contracts, enhancing workflow efficiency.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Created a React-based reservation system for conference rooms and vehicles.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Built REST APIs in C# with ASP.NET core for database management.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", fontWeight: "bold" }}>
          Partners Personnel - Software Engineering Intern (Sept 2022 - Apr 2023)
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Developed a Django-based web app to automate payroll processing, reducing payroll time by 8 hours per cycle.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Automated file format conversions for payroll consistency.
        </Typography>

        {/* Skills & Certifications */}
        <Typography variant="h6" sx={{ color: "#009688", fontWeight: "bold", mt: 3 }}>
          Skills & Certifications
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Programming Languages: TypeScript, JavaScript, Go, Python, C#
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Frameworks & Libraries: React, Vue, .NET, REST APIs
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Tools & Platforms: Docker, Ansible, Git, PostgreSQL, CI/CD
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          - Certifications: SAFe 6 Practitioner (Scaled Agile)
        </Typography>

        {/* Interests */}
        <Typography variant="h6" sx={{ color: "#009688", fontWeight: "bold", mt: 3 }}>
          Interests
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          🦅 Eagle Scout | 🤿 Open Water Scuba Certified (Got lost at sea for an hour!) | 💻 Tech Enthusiast
        </Typography>
      </Paper>

      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1); // Bounce effect
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
});

// Set the displayName for debugging purposes
Resume.displayName = "Resume";

export default Resume;
