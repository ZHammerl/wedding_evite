import React from "react";
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
} from "@mui/material";
import LocationOne from "@assets/img/locations/gettyimages-157610088-612x612.jpg";
import LocationTwo from "@assets/img/locations/gettyimages-170024886-612x612.jpg";
import { LocationObject } from "@interfaces/interfaces";
import "./details.scss";
import * as styles from "./details.styles";

function Details() {
  const locations: LocationObject[] = [
    {
      id: "1",
      title: "Ceremonia Religiosa",
      image: LocationOne,
      name: "Parroquia x",
      date: "12 de enero ",
      time: "14:00",
      address: "calle 50 Centro Barrio, Mexico",
    },
    {
      id: "2",
      title: "Fiesta",
      image: LocationTwo,
      name: "Salon x",
      date: "12 de enero",
      time: "18:00",
      address: "calle 15 Centro Barrio, Mexico",
    },
    {
      id: "3",
      title: "After Party",
      image: LocationTwo,
      name: "Salon Y",
      date: "12 de enero",
      time: "22:00",
      address: "calle 15 Centro Barrio, Mexico",
    },
  ];
  return (
    <Box component="div" sx={styles.sectionContainer}>
      <Container disableGutters sx={styles.cardsContainer}>
        {locations.map((location) => (
          <Card key={location.id} sx={{ maxWidth: 330, py: 2 }}>
            <Stack spacing={2}>
              <Container sx={{ flexDirection: "row" }}>
                <Typography variant="h4" align="center">
                  {location.title}
                </Typography>
              </Container>
              <Box>
                <CardMedia
                  image={location.image}
                  component="img"
                  height="230px"
                />
                <Box sx={styles.time}>
                  <Typography variant="h4">{location.time}</Typography>
                </Box>
              </Box>

              <Container>
                <Typography variant="h5">{location.name}</Typography>
                <Typography variant="h5">{location.date}</Typography>
                <Link
                  variant="h5"
                  href="http://google.com/maps"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noreferrer"
                >
                  {location.address}
                </Link>
              </Container>
            </Stack>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default Details;
