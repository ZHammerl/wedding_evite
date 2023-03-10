import React, { useState } from "react";
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { RadioButtonProps } from "../interfaces/interfaces";


export default function RadioButton({
  data,
}: RadioButtonProps) {
  const [userOption, setUserOption] = useState("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    setUserOption(newOption);
    console.log(userOption);
  };

  const children = [
    <ToggleButton value="si" key="si" color="primary">
      SI
    </ToggleButton>,
    <ToggleButton value="no" key="no" color="secondary">
      NO
    </ToggleButton>,
  ];

  const control = {
    value: userOption,
    onChange: handleChange,
    exclusive: true,
  };

  return (
      <Stack spacing={3} alignItems="center">
        <ToggleButtonGroup {...control}>
          {children}
        </ToggleButtonGroup>
      </Stack>
  );
}
