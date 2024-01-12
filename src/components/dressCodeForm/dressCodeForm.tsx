import React, { useEffect, useState } from "react";
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

const DressCodeForm: React.FC<DressCodeFormProps> = ({ onInputChange }) => {
  const dressCodeOptions = ["Formal", "Casual", "Playero"];
  const [selectOption, setSelectOption] = useState("");

  const handleSelectChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { value } = e.target;
    setSelectOption(value);

    onInputChange({
      target: { name: "dressCode", value: value as string },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Stack gap={2} direction="column">
      <Typography variant="h4">Dress code</Typography>
      <Stack gap={2} direction="row">
        <InputLabel id="dressCode">Select</InputLabel>
        <FormControl variant="standard" required>
          <Select
            name="dressCode"
            value={selectOption}
            onChange={handleSelectChange}
          >
            {dressCodeOptions.map((option, index) => (
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
export default DressCodeForm;
