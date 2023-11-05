import { themePalette } from "@root/theme/theme";
export const containerDrawer = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "100%",
  },
};
export const mainNamesShort = {
  my: "2em",
};

export const listItemDrawer = {
  textAlign: "center",
};
export const mainNamesShortDrawer = {
  flexGrow: 1,
  display: { xs: "block", sm: "none" },
};

export const navbar = {
  backgroundColor: themePalette.COLOR_NAV,
};
export const iconBtn = {
  mr: 2,
  display: { sm: "none" },
};

export const mainNames = { flexGrow: 1, display: { xs: "none", sm: "block" } };

export const navItems = {
  display: { xs: "none", sm: "block" },
};

export const navItemBtn = {
  color: themePalette.COLOR_WHITE,
};
