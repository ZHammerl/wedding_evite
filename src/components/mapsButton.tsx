import React from "react";
import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Container,
  CardMedia,
  Card,
  Link,
} from "@mui/material";
import { themePalette } from "@root/theme/theme";

function MapsButton({ address }) {
  const mapsUrl = `https:/www.google.com/maps/?q=${address}`;

  //* Comments:
  //* Button component makes text upperCase

  const style = {
    color: "white",
    fontFamily: themePalette.FONT_SUBTITLE,
  };

  return (
    <Button variant="contained">
      <Link
        rel="noopener"
        href={mapsUrl}
        variant="h5"
        target="_blank"
        sx={style}
      >
        <Typography variant="h5">Ubicacion</Typography>
      </Link>
    </Button>
  );
}

export default MapsButton;
