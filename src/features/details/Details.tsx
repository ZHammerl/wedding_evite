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
import LocationOne from "../../assets/locations/gettyimages-157610088-612x612.jpg";
import LocationTwo from "../../assets/locations/gettyimages-170024886-612x612.jpg";

function Details() {
  const locations = [
    {
      id: "1",
      title: "Ceremonia Religiosa",
      image: LocationOne,
      name: "Parroquia x",
      date: "12 de enero 14:00",
      address: "calle 50 Centro Barrio, Mexico",
    },
    {
      id: "2",
      title: "Fiesta",
      image: LocationTwo,
      name: "Salon x",
      date: "12 de enero 18:00",
      address: "calle 15 Centro Barrio, Mexico",
    },
  ];
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "red",
        padding: "2em",
        height: "700px",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        {locations.map((location) => (
          <Card key={location.id} sx={{ maxWidth: 250 }}>
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
      </Stack>
    </Box>
  );
}

export default Details;
