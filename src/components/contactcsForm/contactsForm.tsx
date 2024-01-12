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

import { ObjectArrayFormProps } from "@interfaces/interfaces";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
const ContactsForm: React.FC<ObjectArrayFormProps> = ({
  onInputChange,
  onRemoveField,
  onAddField,
  list,
}) => {
  return (
    <Stack spacing={2} direction="column">
      <Typography variant="h4">Contacts</Typography>
      {list.map((contact, index) => (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          gap={2}
          key={index}
        >
          <TextField
            label="Title"
            value={contact.title}
            onChange={(e) => onInputChange(e, index, "title")}
          />
          <TextField
            label="Name"
            value={contact.name}
            onChange={(e) => onInputChange(e, index, "name")}
          />
          <TextField
            label="Phone"
            value={contact.phone}
            onChange={(e) => onInputChange(e, index, "phone")}
          />
          <TextField
            label="In charge of"
            value={contact.inChargeOf}
            onChange={(e) => onInputChange(e, index, "inChargeOf")}
          />
          <Button
            type="button"
            variant="outlined"
            onClick={() => onRemoveField(index)}
          >
            <DeleteForeverRoundedIcon />
          </Button>
        </Stack>
      ))}
      <Button type="button" onClick={() => onAddField()}>
        <AddCircleOutlinedIcon />
        {"Add contact "}
      </Button>
    </Stack>
  );
};
export default ContactsForm;
