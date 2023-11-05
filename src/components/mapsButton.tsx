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

function MapsButton({ address }) {
  const mapsUrl = `https:/www.google.com/maps/?q=${address}`;

  //* Comments:
  //* Button component makes text upperCase

  return (
    <Button variant="contained">
      <Link
        rel="noopener"
        href={mapsUrl}
        variant="h5"
        target="_blank"
        sx={{ color: "white" }}
      >
        Ubicacion
      </Link>
    </Button>
  );
}

export default MapsButton;
