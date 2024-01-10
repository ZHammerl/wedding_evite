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
  FormControl,
  TextField,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { ObjectArrayFormProps } from "@interfaces/interfaces";

const WishList: React.FC<ObjectArrayFormProps> = ({
  onInputChange,
  onRemoveField,
  onAddField,
  list,
}) => {
  return (
    <Box>
      <Typography>{"Where is your wish list"}</Typography>
      {list.map((item, index) => (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          flexWrap="wrap"
          key={index}
        >
          <TextField
            label="Store"
            onChange={(e) => onInputChange(e, index, "store")}
            value={item.store}
          />
          <TextField
            label="Link"
            placeholder="Paste here the link"
            onChange={(e) => onInputChange(e, index, "link")}
            value={item.link}
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
      <Button
        sx={{ width: "10em" }}
        type="button"
        variant="outlined"
        onClick={() => onAddField()}
      >
        <AddCircleOutlinedIcon />
        {"Add contact "}
      </Button>
    </Box>
  );
};

export default WishList;
