import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  COLOR_BG = "#FFFADD",
  COLOR_LIME = "#c8fa5f",
  COLOR_PRIMARY_BTN = "#DAC0A3",
  COLOR_FONT = "#0F2C59",
  COLOR_NAV = "#EADBC8",
  COLOR_CARD = "#FEFCF3",
  COLOR_IMPORTANT_FONT = "#A64B2A",
  COLOR_FONT_FAINT = "#826F66",
  BG = "#F9F5EB",
  LIME = "#675D50",
  FONT_GLOBAL = "", //tipografia
  //Alert styles
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.COLOR_BG,
    },
    primary: {
      main: themePalette.COLOR_PRIMARY_BTN,
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
