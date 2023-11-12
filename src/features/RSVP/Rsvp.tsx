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
import { GuestCards } from "./GuestCard";
import { MenuType } from "@root/types/types";
import * as styles from "./rsvp.style";
import { guestsService } from "../../services/api/guests.service";
import { useParams } from "react-router-dom";
import { Guests, Guest } from "@interfaces/Guests";

function Rsvp() {
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string>("");
  const [guestData, setGuestData] = useState<Guests>({
    _id: "",
    extraGuestPermission: true,
    isConfirmed: false,
    message: "",
    eventId: "1",
    guests: [
      {
        _id: "1",
        familyId: "1",
        firstName: "Jorge",
        surname: "Rodriguez",
        isConfirmed: false,
        menu: [],
      },
      {
        _id: "2",
        familyId: "1",
        firstName: "Franziska",
        surname: "Hammerl",
        isConfirmed: false,
        menu: [],
      },
    ],
  });

  const menu: MenuType = {
    menuOne: "vegetariano",
    menuTwo: "con carne",
  };

  const { eventId } = useParams<{ eventId: string }>();
  const { familyId } = useParams<{ familyId: string }>();

  useEffect(() => {
    if (eventId === undefined || familyId === undefined) {
      return setErrorMessages("No se ha encontrado el evento o la familia");
    }

    console.log(11.1, { eventId, familyId });
    guestsService
      .getGuestFamily(eventId, familyId)
      .then((res: any) => {
        setGuestData(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  if (eventId === undefined || familyId === undefined) {
    return <div>{errorMessages}</div>;
  }

  const addGuest = () => {
    setGuestData((prev) => {
      const updatedGuests = [
        ...prev.guests,
        {
          _id: uuid(),
          familyId: "1",
          firstName: "",
          surname: "",
          isConfirmed: false,
          menu: [],
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
      ...guestData,
      message: text,
    };
    guestsService
      .updateGuestFamily(eventId, rsvpData)
      .then(() => {
        setSent(true);
        setOpen(true);
      })
      .catch((err: any) => console.log(err));
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
    const { _id: guestId, firstName, menu, isConfirmed } = guest;

    return (
      <Grid>
        <Card key={guestId} variant="outlined">
          <CardContent sx={styles.cardContent}>
            {firstName != "" && (
              <Box>
                <Typography variant="h6">{firstName}</Typography>
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
                  <Chip variant="outlined" label={isConfirmed ? "si" : "no"} />
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
                  <Chip variant="outlined" label={menu} />
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
