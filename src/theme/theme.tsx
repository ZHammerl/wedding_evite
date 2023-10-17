import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  COLOR_BG_ONE = "#FFFADD",
  COLOR_BG_TWO = "#F9F5EB",
  COLOR_BG_THREE = "#DADDB1",
  COLOR_LIME = "#c8fa5f",
  COLOR_PRIMARY_BTN = "#DAC0A3",
  COLOR_FONT = "#0F2C59",
  COLOR_NAV = "#EADBC8",
  COLOR_CARD = "#FEFCF3",
  COLOR_WHITE = "#FEFCF3",
  COLOR_IMPORTANT_FONT = "#A64B2A",
  COLOR_FONT_FAINT = "#826F66",
  BG_HOVER_BTN = "#ae9982",
  LIME = "#675D50",
  BG_TRANSPARENT_WHITE = "rgba(255,255,255,0.8)",
  FONT_GLOBAL = "", //tipografia
  //Alert styles
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}

declare module "@mui/material/styles" {
  interface Palette {
    yes: Palette["primary"];
    no: Palette["primary"];
  }
  interface PaletteOptions {
    yes: PaletteOptions["primary"];
    no: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.COLOR_BG_ONE,
    },
    primary: {
      main: themePalette.COLOR_PRIMARY_BTN,
    },
    yes: {
      main: "#79AC78",
    },
    no: {
      main: "#F77754",
    },
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
    MuiAlert: {
      defaultProps: {
        style: {
          fontSize: "1em",
          borderRadius: "0.8em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCESS_MAIN}`,
          background: themePalette.BG_SUCCESS_MAIN,
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
