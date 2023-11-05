import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  TextField,
  Modal,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import { v4 as uuid } from "uuid";
import { GuestItem } from "../../interfaces/interfaces";
import { GuestCards } from "./GuestCard";
import { MenuType } from "@root/types/types";
import * as styles from "./rsvp.style";

function Rsvp() {
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
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
    setOpen(true);
    setSent(true);
    return rsvpData;
  };

  const messageFromGuest = (
    <Card>
      <CardContent sx={styles.message}>
        <Typography>Mensaje</Typography>
        <Box sx={{ pr: 5, pl: 5 }}>
          <TextField
            id="message-box"
            placeholder="Aquí nos pueden dejar un mensaje..."
            variant="filled"
            value={text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setText(event.target.value);
            }}
            multiline
            fullWidth
            rows={4}
          />
        </Box>
      </CardContent>
    </Card>
  );

  const handleClose = () => setOpen(false);

  const successModal = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <Typography variant="h4" component="h2" align="center">
          Muchas gracias!
        </Typography>
        <Typography variant="h6" align="center">
          Hemos recibido tu mensaje.
        </Typography>
      </Box>
    </Modal>
  );

  const GuestInfo = guestData.guests.map((guest) => {
    const { _id: guestId, name, menuChoice, status } = guest;

    return (
      <Grid>
        <Card key={guestId} variant="outlined">
          <CardContent sx={styles.cardContent}>
            {name != "" && (
              <Box>
                <Typography variant="h6">{name}</Typography>
              </Box>
            )}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid>
                  <div>RSVP:</div>
                </Grid>
                <Grid>
                  <Chip variant="outlined" label={status ? "si" : "no"} />
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid>
                  <div>Menu:</div>
                </Grid>
                <Grid>
                  <Chip variant="outlined" label={menuChoice} />
                </Grid>
              </Grid>
            </Grid>
            <Button sx={{ position: "relative" }}>
              <EditIcon
                sx={{
                  position: "absolute",
                  right: 0,
                  "&:hover": {
                    color: "black",
                    cursor: "pointer",
                  },
                }}
                onClick={() => setSent(false)}
              />
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Box sx={styles.rsvpContainer}>
      {sent === false ? (
        <>
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
          {messageFromGuest}
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {GuestInfo}
        </Grid>
      )}

      {successModal}
    </Box>
  );
}

export default Rsvp;
