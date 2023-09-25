import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Guest } from "@interfaces/interfaces";

function GuestList() {
  // const [guestList, setGuestList] = useState<Guest[]>([]);

  const guestList: Guest[] = [
    { name: "jorge", surname: "rodriguez" },
    { name: "ziska", surname: "hammerl" },
  ];

  return (
    <Box>
      {guestList.map((guest) => (
        <Box key={guest.name}>
          <Typography>{guest.name}</Typography>
          <Typography>{guest.surname}</Typography>
        </Box>
      ))}
      <Box>{guestList.length}</Box>
    </Box>
  );
}

export default GuestList;
