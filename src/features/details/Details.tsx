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
import * as styles from "@details/details.styles";
import MapsButton from "@components/mapsButton";

function Details() {
  const locations: LocationObject[] = [
    {
      id: "1",
      title: "Ceremonia Religiosa",
      image: LocationOne,
      name: "Parroquia x",
      date: "12 de enero ",
      time: "14:00",
      address: "rio escondido 1125, leon gto. 37480",
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
          <Card key={location.id} sx={styles.card}>
            <Stack spacing={2}>
              <Typography variant="h4" align="center">
                {location.title}
              </Typography>
              <Box>
                <CardMedia
                  image={location.image}
                  component="img"
                  sx={styles.cardMedia}
                />
                <Box sx={styles.time}>
                  <Typography variant="h4">{location.time}</Typography>
                </Box>
              </Box>

              <Container sx={styles.detailsCard}>
                <Typography variant="h5">{location.name}</Typography>
                <Typography variant="h5">{location.date}</Typography>
                <Typography variant="h5">{location.address}</Typography>
                <MapsButton address={location.address} />
              </Container>
            </Stack>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default Details;
