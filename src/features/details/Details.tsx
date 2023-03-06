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
import LocationOne from "../../assets/img/locations/gettyimages-157610088-612x612.jpg";
import LocationTwo from "../../assets/img/locations/gettyimages-170024886-612x612.jpg";
import { LocationObject } from "../../interfaces/interfaces";

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
    <Box
      component="div"
      sx={{
        backgroundColor: "red",
        padding: "2em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        disableGutters
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {locations.map((location) => (
          <Card
            key={location.id}
            sx={{ maxWidth: 330, maxHeight: 480, margin: 2 }}
          >
            <Stack spacing={2}>
              <Typography variant="h4" align="center">
                {location.title}
              </Typography>
              <CardMedia
                image={location.image}
                component="img"
                sx={{ height: "200px" }}
              />
              <Box sx={{ px: 2 }}>
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
              </Box>
            </Stack>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default Details;
