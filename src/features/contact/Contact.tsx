import React, { useState, useEffect } from "react";
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
import axios from "axios";

function Contact() {
  const instance = axios.create({ baseURL: "http://localhost:9090/api/v1" });
  const [event, setEvent] = useState({});
  const [contact, setContact] = useState([]);
  useEffect(() => {
    instance
      .get("/event/641a107e4cd2c302066e93af")
      .then((response) => setContact(response.data.event.contact))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(contact);

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
        {contact.map((contact) => (
          <Container key={contact.id} maxWidth="xs" sx={styles.helperContainer}>
            <Typography>{contact.title}</Typography>
            <Typography>{contact.name}</Typography>
            {contact.inChargeOf && <Typography>Contactame para:</Typography>}
            <Typography>{contact?.inChargeOf}</Typography>
            <Typography>{contact.phone}</Typography>
          </Container>
        ))}
      </Container>
    </Box>
  );
}

export default Contact;
