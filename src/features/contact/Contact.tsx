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
import * as styles from "@contact/contact.style";
import { WeddingHelper } from "@interfaces/interfaces";

function Contact() {
  const weddingHelpers: WeddingHelper[] = [
    {
      id: 1,
      title: "Testigo",
      name: "Juanito Ramirez",
      phone: "4652 584 615",
      inChargeOf: "",
    },
    {
      id: 2,
      title: "Dama de honor",
      name: "Juanito Ramirez",
      phone: "4652 584 615",
      inChargeOf: "Hospedaje",
    },
  ];
  return (
    <Box sx={styles.sectionContainer}>
      <Typography variant="h4" align="center">
        ¿Tienes preguntas?
      </Typography>
      <Container maxWidth="lg" sx={styles.helpersContainer}>
        {weddingHelpers.map((helper) => (
          <Container key={helper.id} maxWidth="xs" sx={styles.helperContainer}>
            <Typography variant="h5">{helper?.title}</Typography>
            <Typography>{helper.name}</Typography>
            {helper.inChargeOf && <Typography>Contactame para:</Typography>}
            <Typography variant="h5">{helper?.inChargeOf}</Typography>
            <Typography>{helper.phone}</Typography>
          </Container>
        ))}
      </Container>
    </Box>
  );
}

export default Contact;
