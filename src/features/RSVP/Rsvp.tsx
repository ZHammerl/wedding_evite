import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
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
import * as styles from "./rsvp.style";
import { GuestItem } from "../../interfaces/interfaces";
import { GuestCards } from "./GuestCard";
import { MenuType } from "@root/types/types";

export type AdditionalGuestName = {
  name: string;
  surname: string;
  id: string;
};

function Rsvp() {
  const [text, setText] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [guestData, setGuestData] = useState<GuestItem>({
    _id: "",
    guests: [
      {
        _id: "1",
        name: "Jorge",
        surname: "Rodriguez",
        status: false,
        menuChoice: "",
        additionalGuest: false,
      },
      {
        _id: "2",
        name: "Franziska",
        surname: "Hammerl",
        status: false,
        menuChoice: "",
        additionalGuest: false,
      },
    ],
  });

  const menu: MenuType = {
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
          menuChoice: "",
          additionalGuest: true,
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

  const handleSubmit = () => {
    const rsvpData = {
      guests: guestData.guests,
      message: text,
    };
    setShow(false);
    console.log(rsvpData);
    return rsvpData;
  };

  return (
    <Box sx={styles.rsvpContainer}>
      <Typography variant="h3">Confirmar asistencia</Typography>
      <Container className="card-wrapper" sx={styles.cardWrapper}>
        <GuestCards
          guestData={guestData}
          setGuestData={setGuestData}
          removeGuest={removeGuest}
          menu={menu}
        />
      </Container>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={addGuest}>
        Agregar invitado
      </Button>
      <Card>
        <CardContent sx={styles.message}>
          <Typography>Mensaje</Typography>
          <Box>
            <TextField
              id="message-box"
              placeholder="Aquí nos pueden dejar un mensaje..."
              variant="filled"
              value={text}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setText(event.target.value);
              }}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </CardContent>
      </Card>

      <Button variant="outlined" endIcon={<SendIcon />} onClick={handleSubmit}>
        Enviar
      </Button>
    </Box>
  );
}

export default Rsvp;
