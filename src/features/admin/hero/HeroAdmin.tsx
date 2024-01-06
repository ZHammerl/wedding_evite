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
    <Box sx={styles.heroContainer}>
      <Typography>Wellcome {currentUser}</Typography>
    </Box>
  );
};

export default HeroAdmin;
