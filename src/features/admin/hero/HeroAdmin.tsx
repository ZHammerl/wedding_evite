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
import * as styles from "@admin/hero/heroAdmin.style";

const HeroAdmin = () => {
  const [currentUser, setCurrentUser] = useState("blanca");

  return (
    <Container sx={styles.heroContainer}>
      <Typography>Wellcome {currentUser}</Typography>
    </Container>
  );
};

export default HeroAdmin;
