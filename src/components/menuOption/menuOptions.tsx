import React, { useCallback, useEffect, useState } from "react";
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
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Helpers } from "@helpers/helpers";

import { MenuObject } from "@interfaces/interfaces";

const MenuOptions: React.FC<MenuObject> = ({ onInputChange }) => {
  const [menuSelected, setMenuSelected] = useState({
    with_meat: false,
    vegetarian: false,
    vegan: false,
  });

  const updateMenuSelected = useCallback((name: string, checked: boolean) => {
    setMenuSelected((prevMenuSelected) => ({
      ...prevMenuSelected,
      [name]: checked,
    }));
  }, []);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    updateMenuSelected(name, checked);
  };

  useEffect(() => {
    onInputChange({ target: { name: "menus", value: menuSelected } });
  }, [menuSelected, onInputChange]);

  const { with_meat, vegetarian, vegan } = menuSelected;
  return (
    <Stack gap={2}>
      <Typography variant="h4">Menu</Typography>
      <Typography>
        {"Select what kind of menu will you offer to your guests"}
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={with_meat}
              name="with_meat"
              onChange={handleCheckbox}
            />
          }
          label={Helpers.camelCase("with_meat")}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={vegetarian}
              name="vegetarian"
              onChange={handleCheckbox}
            />
          }
          label={Helpers.camelCase("vegetarian")}
        />
        <FormControlLabel
          control={
            <Checkbox checked={vegan} name="vegan" onChange={handleCheckbox} />
          }
          label={Helpers.camelCase("vegan")}
        />
      </FormGroup>
    </Stack>
  );
};
export default MenuOptions;
