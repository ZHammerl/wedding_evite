import { Button, styled } from "@mui/material";
import { themePalette } from "@root/theme/theme";

export const RsvpButton = styled(Button)(({ theme }) => ({
  backgroundColor: themePalette.COLOR_PRIMARY_BTN,
  color: themePalette.COLOR_IMPORTANT_FONT,
  fontFamily: themePalette.FONT_SUBTITLE,
  "&:hover": {
    backgroundColor: themePalette.BG_HOVER_BTN,
  },
}));
