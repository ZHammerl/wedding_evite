import React, { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  styled,
} from "@mui/material";
import { RadioButtonProps } from "../interfaces/interfaces";

const SiToggleButton = styled(ToggleButton)(
  ({ theme }) => ({
    color: "black",
    "&.Mui-selected": {
      backgroundColor: theme.palette.yes.main,
    },
  })
);

const NoToggleButton = styled(ToggleButton)(
  ({ theme }) => ({
    color: "black",
    "&.Mui-selected": {
      backgroundColor: theme.palette.no.main,
    },
  })
);

const OptionButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped:not(:last-of-type) ": {
      borderRadius: "10px",
    },
    "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
      borderRadius: "10px",
      borderLeft: "1px solid  rgba(0, 0, 0, 0.12)",
    },
  })
);

export default function OptionToggleButton({
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
    <SiToggleButton fullWidth={true} value="si" key="si">
      SI
    </SiToggleButton>,
    <NoToggleButton fullWidth={true} value="no" key="no">
      NO
    </NoToggleButton>,
  ];

  const control = {
    value: userOption,
    onChange: handleChange,
    exclusive: true,
    fullWidth: true,
  };

  return (
    <Box>
      <OptionButtonGroup
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gridGap: "10px",
        }}
        {...control}>
        {children}
      </OptionButtonGroup>
    </Box>
  );
}
