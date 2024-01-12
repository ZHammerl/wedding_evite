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

const menu: MenuType = {
  menuOne: "vegetariano",
  menuTwo: "con carne",
};

function Rsvp() {
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string>("");
  const [guestData, setGuestData] = useState<Guests>();

  const menuItems: string[] = Object.values(menu);

  const { eventId } = useParams<{ eventId: string }>();
  const { familyId } = useParams<{ familyId: string }>();

  console.log(11, { eventId, familyId });

  useEffect(() => {
    console.log(13.1, { guestData });
    if (guestData) {
      console.log(13.12, { guestData });
    }
  }, []);

  useEffect(() => {
    console.log(11.1, { eventId, familyId });
    if (eventId === undefined || familyId === undefined) {
      return setErrorMessages("No se ha encontrado el evento o la familia");
    }

    guestsService
      .getGuestFamily(eventId, familyId)
      .then((res: any) => {
        const family = res.family;
        const updatedGuests = [...family.guests];

        updatedGuests.forEach((guest) => {
          guest.menuchoice = menuItems[0];
        });

        setGuestData({
          ...family,
          guests: updatedGuests,
        });
      })
      .catch((err: any) => console.log(err));
  }, [eventId, familyId]);

  console.log(11.3, { guestData });

  if (
    eventId === undefined ||
    familyId === undefined ||
    guestData === undefined
  ) {
    return <div>{errorMessages}</div>;
  }

  const addGuest = () => {
    setGuestData((prev: Guests | undefined) => {
      if (prev === undefined) {
        return undefined;
      } else {
        const updatedGuests = [
          ...prev.guests,
          {
            _id: uuid(),
            familyId: familyId,
            firstName: "",
            surname: "",
            status: false,
            menuchoice: menuItems[0],
            additionalGuest: true,
          },
        ];
        console.log("updatedGuests:", { updatedGuests });
        return { ...prev, guests: updatedGuests };
      }
    });
  };

  const removeGuest = (id: string | number) => {
    setGuestData((prev: Guests | undefined) => {
      if (prev === undefined) {
        return undefined;
      } else {
        const updatedGuests = prev.guests.filter((guest) => guest._id !== id);
        return { ...prev, guests: updatedGuests };
      }
    });
  };

  const handleSubmit = () => {
    const rsvpData = {
      ...guestData,
      message: text,
    };
    guestsService
      .updateGuestFamily(eventId, familyId, rsvpData)
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

  const GuestInfo = guestData.guests.map((guest, i) => {
    console.log(11.5, { guestData, guest });
    const { firstName, status, menuchoice } = guest;

    console.log(11.4, { sent });

    return (
      <div>Hello</div>
      // <Grid>
      //   <Card key={i} variant="outlined">
      //     <CardContent sx={styles.cardContent}>
      //       {firstName !== "" && (
      //         <Box>
      //           <Typography variant="h6">{firstName}</Typography>
      //         </Box>
      //       )}
      //       <Grid
      //         container
      //         direction="column"
      //         alignItems="flex-start"
      //         rowSpacing={1}
      //         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      //       >
      //         <Grid
      //           container
      //           direction="row"
      //           justifyContent="flex-start"
      //           alignItems="center"
      //         >
      //           <Grid>
      //             <div>RSVP:</div>
      //           </Grid>
      //           <Grid>
      //             <Chip variant="outlined" label={status ? "si" : "no"} />
      //           </Grid>
      //         </Grid>

      //         <Grid
      //           container
      //           direction="row"
      //           justifyContent="flex-start"
      //           alignItems="center"
      //         >
      //           <Grid>
      //             <div>Menu:</div>
      //           </Grid>
      //           <Grid>
      //             <Chip variant="outlined" label={menuchoice} />
      //           </Grid>
      //         </Grid>
      //       </Grid>
      //       <Button sx={{ position: "relative" }}>
      //         <EditIcon
      //           sx={{
      //             position: "absolute",
      //             right: 0,
      //             "&:hover": {
      //               color: "black",
      //               cursor: "pointer",
      //             },
      //           }}
      //           onClick={() => setSent(false)}
      //         />
      //       </Button>
      //     </CardContent>
      //   </Card>
      // </Grid>
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
              menuItems={menuItems}
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
