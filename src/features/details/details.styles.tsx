import { themePalette } from "@root/theme/theme";
export const time = {
  position: "absolute",
  translate: "0.5em -4em",
  borderRadius: ".25em",
  backgroundColor: themePalette.BG_TRANSPARENT_WHITE,
  padding: "1em",
};

export const cardsContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2em",
};

export const sectionContainer = {
  backgroundColor: themePalette.COLOR_BG_TWO,
  padding: "2em",
};

export const detailsCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1em",
};

export const card = {
  width: "25em",
  py: "1em",
  backgroundColor: themePalette.COLOR_CARD,
};

export const cardMedia = {
  height: "16em",
};

export const subtitle = {
  fontFamily: themePalette.FONT_SUBTITLE,
};
