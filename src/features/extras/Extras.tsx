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
    gifts: ["liverpool link", "amazon wishlist"],
    dressCode: "playero", //casual, formal, playero
    childPolicy: false,
  };

  const dressCode = (data: string) => {
    switch (data) {
      case "formal":
        return (
          <Box>
            <Typography>fromal</Typography>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/formal.png"
              alt="formal"
            />
          </Box>
        );
      case "casual":
        return (
          <Box>
            <Typography>casual</Typography>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/casual.png"
              alt="formal"
            />
          </Box>
        );
      case "playero":
        return (
          <Box>
            <Typography>playero</Typography>
            <CardMedia
              component="img"
              sx={styles.image}
              image="/src/assets/img/icons/playero.png"
              alt="formal"
            />
          </Box>
        );
    }
  };

  const childPolicy = (value: boolean) => {
    if (value === true) {
      return (
        <Box>
          <Typography>permitidos</Typography>
          <CardMedia
            component="img"
            sx={styles.image}
            image="/src/assets/img/icons/kids.png"
            alt="formal"
          />
        </Box>
      );
    } else {
      return (
        <Box>
          <Typography>no permitidos</Typography>
          <CardMedia
            component="img"
            image="/src/assets/img/icons/noKids.png"
            alt="formal"
            sx={styles.image}
          />
        </Box>
      );
    }
  };

  const giftList = (list: string[]) => {
    return (
      <List>
        {list.map((item) => (
          <ListItem>{item}</ListItem>
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
          <Typography variant="h5">Gifts</Typography>
          <Box>{giftList(data.gifts)}</Box>
        </Box>
        <Stack
          direction={"row"}
          divider={<Divider variant="middle" orientation="vertical" flexItem />}
        >
          <Box sx={styles.card}>
            <Typography variant="h5">Dress Code</Typography>
            {dressCode(data.dressCode)}
          </Box>
          <Box sx={styles.card}>
            <Typography variant="h5">Child Policy</Typography>
            {childPolicy(data.childPolicy)}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Extras;
