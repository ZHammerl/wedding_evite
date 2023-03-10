import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#12181b",
  LIME = "#c8fa5f",
  FONT_GLOBAL = "", //tipografia
}

declare module '@mui/material/styles' {
  
  interface Palette {
    yes: Palette['primary'];
    no: Palette['primary'];
  }
  interface PaletteOptions {
    yes: PaletteOptions['primary'];
    no: PaletteOptions['primary'];
  }}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
    yes:{
      main: "#388e3c"
    }, 
    no: {
      main: "#d32f2f"
    }
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
    fontSize: 12,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "0.5em",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
