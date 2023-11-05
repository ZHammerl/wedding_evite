import React from "react";
import { Box, Stack, Typography, CardMedia } from "@mui/material";
import heroImage from "@assets/img/hero_img.jpg";
import * as styles from "@hero/hero.styles";

function Hero({}) {
  const data = {
    nameOne: "Blanca",
    nameTwo: "Pamela",
    date: "11 de Noviembre 2023",
    location: "Querétaro",
  };

  const image = heroImage;

  return (
    <Box>
      <CardMedia image={image} sx={styles.heroPicture} title="The happy couple">
        <Stack alignItems="center" sx={styles.detailsHero}>
          <Typography variant="h1" align="center" flexWrap="wrap">
            {data.nameOne} & {data.nameTwo}
          </Typography>
          <Typography variant="h3">{data.location} </Typography>
          <Typography variant="h2" align="center">
            {data.date}
          </Typography>
        </Stack>
      </CardMedia>
    </Box>
  );
}

export default Hero;
