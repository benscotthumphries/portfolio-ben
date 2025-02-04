import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton, Paper, Tooltip } from '@mui/material';
import GetAppIcon from "@mui/icons-material/GetApp";

function Resume() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4, width: "100%" }}>
        <Typography variant="h3" sx={{ color: "#009688", fontWeight: "bold", flexGrow: 1 }}>
          My Resume
        </Typography>
        <Tooltip title="Download My Resume">
          <IconButton
            href="/Ben_Humphries_Resume.pdf"
            target="_blank"
            download
            sx={{
              backgroundColor: "#009688",
              color: "#ffffff",
              padding: "0.5rem",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              '&:hover': {
                backgroundColor: "#00796b",
                animation: 'bounce 0.6s ease-in-out', // Bounce effect on hover
              },
              '@keyframes bounce': {
                '0%': {
                  transform: 'scale(1)',
                },
                '50%': {
                  transform: 'scale(1.1)', // Bounce up
                },
                '100%': {
                  transform: 'scale(1)', // Return to original size
                },
              },
            }}
          >
            <GetAppIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Paper sx={{ padding: "1.5rem", backgroundColor: "#121212", color: "#ffffff", borderRadius: "10px", mb: 2, textAlign: "left" }}>
        {/* Contact Information */}
        < Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
          Ben Humphries
        </Typography >
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          📧 benscotthumphries@gmail.com | 📞 (505) 459-3819
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

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Northrop Grumman</strong> - Software Engineer (Oct 2024 - Present)
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

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Northrop Grumman</strong> - Associate Software Engineer (June 2023 - Oct 2024)
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

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Brigham Young University</strong> - Full-Stack Software Engineer (Jul 2021 - Apr 2023)
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

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Partners Personnel</strong> - Software Engineering Intern (Sept 2022 - Apr 2023)
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
      </Paper >
    </>
  );
}

export default Resume;