// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C967B", // Set your primary color
    },
    secondary: {
      main: "#f50057", // Set your secondary color
    },
    background: {
      default: "#FAFAFA", // Set your default background color
    },
    text: {
      primary: "#333333", // Set your primary text color
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif", // Set your default font family
  },
  breakpoints: {
    values: {
      xs: 0, // extra-small
      sm: 600, // small
      md: 900, // medium
      lg: 1200, // large
      xl: 1536, // extra-large
    },
  },
});

export default theme;
