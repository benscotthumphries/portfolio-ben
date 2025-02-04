"use client";
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C3E50", // Fallback solid color (dark steel blue)
      paper: "#1E1E1E",
    },
    primary: {
      main: "#BEBEBE",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #141e30, #2C3E50)", // Properly applied gradient
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
