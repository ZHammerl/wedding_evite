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
import { useAuth } from "@root/context/auth.context";

const HeroAdmin = () => {
  const { loginResult } = useAuth();
  const { user } = loginResult;

  console.log(loginResult);

  return (
    <Box sx={styles.heroContainer}>
      <Typography>Wellcome {user.username}</Typography>
    </Box>
  );
};

export default HeroAdmin;
