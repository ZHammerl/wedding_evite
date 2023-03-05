import React from "react";
import { Container } from "@mui/system";
import { Box, Stack, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

function Hero({}) {
  const data = {
    nameOne: "Blanca",
    nameTwo: "Pamela",
    date: "11 de Noviembre 2023",
    location: "Querétaro",
  };

  const image =
    "https://images.unsplash.com/photo-1620862657912-57090d3f03e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <Box>
      <CardMedia
        image={image}
        sx={{
          height: 400,
          color: "white",
          display: "flex",
          alignContent: "flex-end",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        title="The happy couple">
        <Stack
          alignItems="center"
          spacing={2}
          sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            align="center"
            flexWrap="wrap">
            {data.nameOne} & {data.nameTwo}
          </Typography>
          <Typography variant="h4">
            {data.location}
          </Typography>
          <Typography variant="h4" align="center">
            {data.date}
          </Typography>
        </Stack>
      </CardMedia>
    </Box>
  );
}

export default Hero;
