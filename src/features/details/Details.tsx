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
import MapsButton from "../../components/mapsButton";
import { useAuth } from "@root/context/auth.context";

function Details() {
  const { currentData } = useAuth();
  const { locations } = currentData;

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
