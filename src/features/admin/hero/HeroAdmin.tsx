import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroAdmin = () => {
  const [currentUser, setCurrentUser] = useState("blanca");

  return (
    <Box>
      <Typography>Wellcome {currentUser}</Typography>
    </Box>
  );
};

export default HeroAdmin;
