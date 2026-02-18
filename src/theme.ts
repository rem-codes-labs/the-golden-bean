import { createTheme } from "@mui/material/styles";

const warmCream = "#F5EFE6";
const sage = "#9AAE9A";
const gold = "#C6A75A";
const text = "#2F2E2C";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: text },
    secondary: { main: sage },
    text: { primary: text },
    background: { default: warmCream },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 12,
        },
      },
    },
  },
});

export const tokens = {
  warmCream,
  sage,
  gold,
  text,
};
