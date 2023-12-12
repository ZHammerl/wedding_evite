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
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Helpers } from "@helpers/helpers";

import { DressCodeFormProps } from "@interfaces/interfaces";

const ChildPolicyForm: React.FC<DressCodeFormProps> = ({ onInputChange }) => {
  const [selectOption, setSelectOption] = useState("");
  const childPolicyValues = ["No kids allowed", "Kids allowed"];

  const handleSelectChange = (e: React.ChangeEvent<{ value: string }>) => {
    const { value } = e.target;

    setSelectOption(value);

    onInputChange({
      target: { name: "childPolicy", value: value === childPolicyValues[1] },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  //estas opciones dresscode y childpolicy asi como el menu deberia venir por default o mejor se declaran aqui las 3

  return (
    <Stack gap={2}>
      <Stack gap={2} direction={"row"}>
        <Typography variant="h4">Child policy</Typography>
        <InputLabel id="dressCode">Select</InputLabel>
        <FormControl variant="standard" required>
          <Select
            name="childPolicy"
            value={selectOption}
            onChange={handleSelectChange}
          >
            {childPolicyValues.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};
export default ChildPolicyForm;
