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
  ButtonGroup,
  Container,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuid } from "uuid";
import RadioButton from "../../components/radioButton";

import {
  GuestItem,
  GuestItems,
} from "../../interfaces/interfaces";

function Rsvp() {
  const [newGuests, setNewGuests] = useState<GuestItems>(
    [] as GuestItems
  );
  const guests: GuestItem[] = [
    {
      id: 1,
      name: "Jorge",
      surname: "Rodriguez",
    },
    { id: 2, name: "Franziska", surname: "Hammerl" },
  ];

  const menue = {
    menueOne: "vegetariano",
    menueTwo: "con carne",
  };

  const addGuest = () => {
    setNewGuests([
      ...newGuests,
      { id: uuid(), name: "", surname: "" },
    ]);
  };

  const data = [{ value: "SI" }, { value: "NO" }];

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
        {guests.map((guest) => (
          <Card
            key={guest.id}
            variant="outlined"
            sx={{ px: 2 }}>
            <CardContent
              sx={{
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}>
              <Typography variant="h6">
                {guest.name}
              </Typography>
              <Box className="feedback-wrapper">
                <Typography variant="body1" mb={1}>
                  Vienes a nuestra boda?
                </Typography>
                <RadioButton data={data} />
              </Box>
              <FormControl sx={{ mt: 2 }}>
                <FormLabel id="menue-selection">
                  Qué menue prefieres?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="menue-selection"
                  name="controlled-radio-buttons-group"
                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value={menue.menueOne}
                    control={<Radio />}
                    label={menue.menueOne}
                  />
                  <FormControlLabel
                    value={menue.menueTwo}
                    control={<Radio />}
                    label={menue.menueTwo}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}
        {newGuests.length != 0 &&
          newGuests.map((guest) => (
            <Card
              variant="outlined"
              sx={{ px: 2 }}
              key={guest.id}>
              <CardContent
                sx={{
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <FormControl sx={{ width: 170 }}>
                  <TextField
                    id="name"
                    label="Nombre"
                    required
                    variant="standard"></TextField>
                </FormControl>
                <FormControl sx={{ width: 170 }}>
                  <TextField
                    id="surname"
                    label="Apellido"
                    required
                    variant="standard"></TextField>
                </FormControl>
                <Box className="feedback-wrapper">
                  <Typography variant="body1" mb={1}>
                    Vienes a nuestra boda?
                  </Typography>
                  <ButtonGroup className="feedbackButton-wrapper">
                    <Button className="feedback">Si</Button>
                    <Button className="feedback">No</Button>
                  </ButtonGroup>
                </Box>{" "}
                <FormControl sx={{ mt: 2 }}>
                  <FormLabel id="menue-selection">
                    Qué menue prefieres?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="menue-selection"
                    name="controlled-radio-buttons-group"
                    // value={value}
                    // onChange={handleChange}
                  >
                    <FormControlLabel
                      value={menue.menueOne}
                      control={<Radio />}
                      label={menue.menueOne}
                    />
                    <FormControlLabel
                      value={menue.menueTwo}
                      control={<Radio />}
                      label={menue.menueTwo}
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
