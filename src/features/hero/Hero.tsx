import React from "react";
import { Container } from "@mui/system";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import heroImage from "@assets/img/hero_img.jpg";
import * as styles from "@hero/hero.style";

function Hero({}) {
  const data = {
    nameOne: "Blanca",
    nameTwo: "Pamela",
    date: "11/11/2023",
    location: "Querétaro",
    message: "Save the date",
    region: "es-ES",
  };
  //* Maybe this could go in a separate file
  const date = new Date(data.date);
  const locale = navigator.language;
  const options = {
    // hour: 'numeric',
    // minute: 'numeric',
    // day: 'numeric',
    // month: 'long',
    // year: '2-digit',
    weekday: "long" /* narrow long short*/,
  };

  const option1: DateTimeFormatOptions = {
    weekday: "long",
  };
  const option2: DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const option3: DateTimeFormatOptions = {
    year: "numeric",
  };

  const weedingDay = new Intl.DateTimeFormat(locale, option1)
    .format(date)
    .toUpperCase();
  const weedingDate = new Intl.DateTimeFormat(locale, option2)
    .format(date)
    .toUpperCase();
  const weedingYear = new Intl.DateTimeFormat(locale, option3).format(date);

  const image = heroImage;

  return (
    <CardMedia image={image} sx={styles.heroWrapper} title="The happy couple">
      <Stack alignItems="center" spacing={{ xs: 1, sm: 2 }} sx={{ mb: 4 }}>
        <Typography variant="h1" align="center" flexWrap="wrap">
          {data.nameOne} & {data.nameTwo}
        </Typography>
        <Typography variant="h4">{data.message}</Typography>
        {/* <Typography variant="h2">{data.location}</Typography> */}
        <Stack
          direction={"row"}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Typography variant="h4">{weedingDay}</Typography>
          <Typography variant="h4">{weedingDate}</Typography>
          <Typography variant="h4">{weedingYear}</Typography>
        </Stack>
      </Stack>
    </CardMedia>
  );
}

export default Hero;
