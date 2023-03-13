import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Card,
  CardContent,
  CardActions,
  InputLabel,
  Input,
  Button,
  Container,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import { v4 as uuid } from "uuid";
import OptionToggleButton from "./optionToggleButton";

import { GuestItem } from "../../interfaces/interfaces";

function Rsvp() {
  const [guestData, setGuestData] = useState<GuestItem>({
    _id: "",
    guests: [
      {
        _id: 1,
        name: "Jorge",
        surname: "Rodriguez",
        status: false,
        menu: {
          option1: false,
          option2: false,
        },
      },
      {
        _id: 2,
        name: "Franziska",
        surname: "Hammerl",
        status: false,
        menu: {
          option1: false,
          option2: false,
        },
      },
    ],
  });

  const menu = {
    menuOne: "vegetariano",
    menuTwo: "con carne",
  };

  const addGuest = () => {
    setGuestData((prev) => {
      const updatedGuests = [
        ...prev.guests,
        {
          _id: uuid(),
          name: "",
          surname: "",
          status: false,
          menu: {
            option1: false,
            option2: false,
          },
        },
      ];
      return { ...prev, guests: updatedGuests };
    });
  };

  const removeGuest = (id: string | number) => {
    setGuestData((prev) => {
      const updatedGuests = [
        ...prev.guests.filter((guest) => guest._id !== id),
      ];

      return { ...prev, guests: updatedGuests };
    });
  };

  return (
    <Box
      sx={{
        textAlign: "center",
      }}>
      <Typography variant="h3">
        Confirmar asistencia
      </Typography>
      <Container
        className="card-wrapper"
        sx={{
          my: 3,
          maxWidth: 600,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}>
        {guestData.guests.map((guest) => (
          <Card
            key={guest._id}
            variant="outlined"
            sx={{ px: 2 }}>
            <CardContent
              sx={{
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 220,
              }}>
              {guest.name != "" ? (
                <Box>
                  <Typography variant="h6">
                    {guest.name}
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Box sx={{ position: "relative" }}>
                    <ClearIcon
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: -15,
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => removeGuest(guest._id)}
                    />
                  </Box>
                  <FormControl>
                    <TextField
                      id="name"
                      label="Nombre"
                      required
                      variant="standard"></TextField>
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="surname"
                      label="Apellido"
                      required
                      variant="standard"></TextField>
                  </FormControl>
                </Box>
              )}
              <Box className="feedback-wrapper">
                <Typography variant="body1" mb={1}>
                  ¿Vienes a nuestra boda?
                </Typography>
                <OptionToggleButton guestId={guest._id} />
              </Box>{" "}
              <FormControl sx={{ mt: 2 }}>
                <Typography variant="body1" mb={1}>
                  ¿Qué menú prefieres?
                </Typography>
                <RadioGroup
                  aria-labelledby="menu-selection"
                  name="controlled-radio-buttons-group"
                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value={menu.menuOne}
                    control={<Radio />}
                    label={menu.menuOne}
                  />
                  <FormControlLabel
                    value={menu.menuOne}
                    control={<Radio />}
                    label={menu.menuTwo}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}
      </Container>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addGuest}>
        Agregar invitado
      </Button>
      <Container maxWidth="xs" sx={{ my: 5 }}>
        <Typography align="left">Mensaje</Typography>
        <TextField
          id="message-box"
          placeholder="Aquí nos pueden dejar un mensaje..."
          variant="filled"
          fullWidth
          multiline
          rows={4}
        />
      </Container>
      <Button variant="outlined" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </Box>
  );
}

export default Rsvp;
