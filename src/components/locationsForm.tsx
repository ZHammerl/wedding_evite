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

import { LocationsFormProps } from "@interfaces/interfaces";

const LocationsForm: React.FC<LocationsFormProps> = ({
  onInputChange,
  onRemoveField,
  onAddField,
  locations,
}) => {
  return (
    <Box>
      {locations.map((location, index) => (
        <Box key={index}>
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
        </Box>
      ))}
      <Button type="button" onClick={() => onAddField()}>
        Add Location
      </Button>
    </Box>
  );
};
export default LocationsForm;
