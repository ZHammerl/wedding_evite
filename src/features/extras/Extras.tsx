import React, { useState } from "react";
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
import * as styles from "./extras.styles";

function Extras() {
  const data = {
    gifts: [
      { _id: 1, link: "liverpool link" },
      { _id: 2, link: "amazon wishlist" },
    ],
    dressCode: "playero", //casual, formal, playero
    childPolicy: false,
  };

  const dressCode = (data: string) => {
    switch (data) {
      case "formal":
        return (
          <Box>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/formal.png"
              alt="formal"
            />
            <Typography variant="h5">Fromal</Typography>
          </Box>
        );
      case "casual":
        return (
          <Box>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/casual.png"
              alt="formal"
            />
            <Typography variant="h5">Casual</Typography>
          </Box>
        );
      case "playero":
        return (
          <Box>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/playero.png"
              alt="formal"
            />
            <Typography variant="h5">Playero</Typography>
          </Box>
        );
    }
  };

  const childPolicy = (value: boolean) => {
    if (value === true) {
      return (
        <Box>
          <CardMedia
            component="img"
            sx={styles.image}
            image="/src/assets/img/icons/kids.png"
            alt="formal"
          />
          <Typography variant="h5">Permitidos</Typography>
        </Box>
      );
    } else {
      return (
        <Box>
          <CardMedia
            component="img"
            image="/src/assets/img/icons/noKids.png"
            alt="formal"
            sx={styles.image}
          />
          <Typography variant="h5">No permitidos</Typography>
        </Box>
      );
    }
  };

  const giftList = (list: object[]) => {
    return (
      <List>
        {list.map((item: object) => (
          <ListItem key={item._id}>
            <Typography variant="h5">{item.link}</Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Container sx={styles.container}>
      <Stack
        direction={"column"}
        divider={<Divider variant="middle" orientation="horizontal" flexItem />}
      >
        <Box sx={styles.card}>
          <Typography variant="h4">Gifts</Typography>
          <Box>{giftList(data.gifts)}</Box>
        </Box>
        <Stack
          direction={"row"}
          divider={<Divider variant="middle" orientation="vertical" flexItem />}
        >
          <Box sx={styles.card}>
            <Typography variant="h4">Dress Code</Typography>
            {dressCode(data.dressCode)}
          </Box>
          <Box sx={styles.card}>
            <Typography variant="h4">Child Policy</Typography>
            {childPolicy(data.childPolicy)}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Extras;
