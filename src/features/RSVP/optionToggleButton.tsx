import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { Guests } from "@interfaces/Guests";

const SiToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: "black",
  "&.Mui-selected": {
    backgroundColor: theme.palette.yes.main,
  },
}));

const NoToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: "black",
  "&.Mui-selected": {
    backgroundColor: theme.palette.no.main,
  },
}));

const OptionButtonGroup = styled(ToggleButtonGroup)(() => ({
  "& .MuiToggleButtonGroup-grouped:not(:last-of-type) ": {
    borderRadius: "10px",
  },
  "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
    borderRadius: "10px",
    borderLeft: "1px solid  rgba(0, 0, 0, 0.12)",
  },
}));

type Props = {
  guestData: Guests;
  setGuestData: React.Dispatch<React.SetStateAction<Guests | undefined>>;
  guestId: string;
};
export default function OptionToggleButton({
  guestId,
  guestData,
  setGuestData,
}: Props) {
  const [userOption, setUserOption] = useState<boolean>();

  if (!guestData || guestData.guests.length === 0) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newOption: boolean
  ) => {
    setUserOption(newOption);
    const updatedGuests = guestData.guests.map((guest) => {
      if (guest._id === guestId) {
        return {
          ...guest,
          status: newOption,
        };
      }
      return guest;
    });
    setGuestData({
      ...guestData,
      guests: updatedGuests,
    });
  };

  const children = [
    <SiToggleButton
      fullWidth={true}
      value={true}
      key="si"
      defaultChecked={true}
    >
      SI
    </SiToggleButton>,
    <NoToggleButton fullWidth={true} value={false} key="no">
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
        {...control}
      >
        {children}
      </OptionButtonGroup>
    </Box>
  );
}
