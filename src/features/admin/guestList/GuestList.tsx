import React, { useState } from "react";
import {
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
import { Guest } from "@interfaces/interfaces";

function GuestList() {
  // const [guestList, setGuestList] = useState<Guest[]>([]);

  const guestList: Guest[] = [
    { name: "jorge", surname: "rodriguez" },
    { name: "ziska", surname: "hammerl" },
    { name: "jose", surname: "saavedra" },
  ];

  return (
    <Container>
      {guestList.map((guest) => (
        <Box key={guest.name}>
          <Typography>{guest.name}</Typography>
          <Typography>{guest.surname}</Typography>
        </Box>
      ))}
      <Box>{guestList.length}</Box>
    </Container>
  );
}

export default GuestList;
