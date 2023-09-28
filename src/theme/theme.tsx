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
  FONT_GLOBAL = "", //tipografia
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
