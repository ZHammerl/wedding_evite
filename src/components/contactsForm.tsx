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

import { ContactsFormProps } from "@interfaces/interfaces";

const ContactsForm: React.FC<ContactsFormProps> = ({
  onInputChange,
  onRemoveField,
  onAddField,
  contacts,
}) => {
  return (
    <Box>
      {contacts.map((contact, index) => (
        <Box key={index}>
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
            Remove Contact
          </Button>
        </Box>
      ))}
      <Button type="button" onClick={() => onAddField()}>
        Add Contact
      </Button>
    </Box>
  );
};
export default ContactsForm;
