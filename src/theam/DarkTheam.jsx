import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "rgb(88,199,250)",
       // Customize the primary color to your preference
      // main: "red"
    },
    secondary: {
      main: "#5A20CB", // Customize the secondary color to your preference
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#EF7C8E",
      default: "#EF7C8E",
      paper: "#EF7C8E",
    },
    textColor: {
      main: "#111111",
    },
  },
});

export default darkTheme;