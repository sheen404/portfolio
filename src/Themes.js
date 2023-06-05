import React from "react";
import { createTheme, ThemeProvider, colors } from "@mui/material";

export const mainTheme = createTheme({
    palette: {
      primary: {
        dark: "#0f0f0f",
        main: "#F7C9D6",
        contrastText: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
        dark: "#73BBC9",
      },
    },
  });