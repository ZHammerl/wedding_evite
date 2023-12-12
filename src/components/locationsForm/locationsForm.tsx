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

const LocationsForm: React.FC<ObjectArrayFormProps> = ({
  onInputChange,
  onRemoveField,
  onAddField,
  list,
}) => {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">Locations</Typography>
      {list.map((location, index) => (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          flexWrap="wrap"
          key={index}
        >
          <TextField
            label="Title"
            value={location.title}
            onChange={(e) => onInputChange(e, index, "title")}
          />
          <TextField
            label="Name"
            value={location.name}
            onChange={(e) => onInputChange(e, index, "name")}
          />
          <TextField
            label="Date"
            value={location.date}
            onChange={(e) => onInputChange(e, index, "date")}
          />
          <TextField
            label="Time"
            value={location.time}
            onChange={(e) => onInputChange(e, index, "time")}
          />
          <TextField
            label="Address"
            value={location.address}
            onChange={(e) => onInputChange(e, index, "address")}
          />
          <Button
            type="button"
            variant="outlined"
            onClick={() => onRemoveField(index)}
          >
            Remove Location
          </Button>
        </Stack>
      ))}
      <Button
        sx={{ width: "10em" }}
        type="button"
        variant="outlined"
        onClick={() => onAddField()}
      >
        Add Location
      </Button>
    </Stack>
  );
};
export default LocationsForm;
