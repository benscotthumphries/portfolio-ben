import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AboutMe() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, textAlign: "center" }}
      >
        About me
      </Typography>
    </Box>
  );
}

export default AboutMe;
