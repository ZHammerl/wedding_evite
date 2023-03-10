import { Button, styled } from "@mui/material";

export const RsvpButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "red",
  "&:hover": {
    backgroundColor: "#820000",
  },
}));
