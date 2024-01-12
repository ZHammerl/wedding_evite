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
  FormControl,
  TextField,
  Grid,
} from "@mui/material";

import { CouplesNameFormProps } from "@interfaces/interfaces";

const CouplesNamesForm: React.FC<CouplesNameFormProps> = ({
  onInputChange,
}) => {
  return (
    <Stack gap={2}>
      <Typography variant="h4">Couple names</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          id="nameOne"
          name="nameOne"
          onChange={(e) => onInputChange(e)}
          label="Name"
        />
        <TextField
          id="surnameOne"
          name="surnameOne"
          onChange={(e) => onInputChange(e)}
          label="Surname"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          id="nameTwo"
          name="nameTwo"
          onChange={(e) => onInputChange(e)}
          label="Name"
        />
        <TextField
          id="surnameTwo"
          name="surnameTwo"
          onChange={(e) => onInputChange(e)}
          label="Surname"
        />
      </Stack>
    </Stack>
  );
};
export default CouplesNamesForm;
