import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Card,
  CardContent,
  Container,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import OptionToggleButton from "./optionToggleButton";
import * as styles from "./rsvp.style";
import { Guests } from "@interfaces/Guests";
import { MenuType } from "@root/types/types";

type Props = {
  guestData: Guests;
  setGuestData: React.Dispatch<React.SetStateAction<Guests | undefined>>;
  removeGuest: (id: string) => void;
  menuItems: string[];
};
export const GuestCards = ({
  guestData,
  setGuestData,
  removeGuest,
  menuItems,
}: Props) => {
  if (!guestData || guestData.guests.length === 0) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    guestId: string
  ) => {
    const value = event.target.value;
    const updatedGuests = guestData.guests.map((guest) => {
      if (guest._id === guestId) {
        return {
          ...guest,
          [event.target.name]: value,
        };
      }
      return guest;
    });
    setGuestData({
      ...guestData,
      guests: updatedGuests,
    });
  };

  return (
    <Container className="card-wrapper" sx={styles.cardWrapper}>
      {guestData.guests.map((guest) => {
        const { _id: guestId, firstName, additionalGuest } = guest;
        console.log(13.2, { guest });
        const capitalizedFirstName =
          firstName.charAt(0).toUpperCase() + firstName.slice(1);

        return (
          <Card key={guestId} variant="outlined">
            <CardContent sx={styles.cardContent}>
              {additionalGuest === false || additionalGuest === undefined ? (
                <Box>
                  <Typography variant="h6">{capitalizedFirstName}</Typography>
                </Box>
              ) : (
                <Box sx={{ position: "relative" }}>
                  <ClearIcon
                    sx={{
                      position: "absolute",
                      right: 0,
                      "&:hover": {
                        color: "red",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => removeGuest(guestId)}
                  />
                  <FormControl>
                    <TextField
                      id="firstName"
                      label="Nombre"
                      name="firstName"
                      required
                      variant="standard"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(event, guestId)
                      }
                    ></TextField>
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="surname"
                      label="Apellido"
                      name="surname"
                      required
                      variant="standard"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(event, guestId)
                      }
                    ></TextField>
                  </FormControl>
                </Box>
              )}
              <Box className="feedback-wrapper" sx={styles.feedbackWrapper}>
                <Typography variant="body1">¿Vienes a nuestra boda?</Typography>
                <OptionToggleButton
                  guestId={guestId}
                  guestData={guestData}
                  setGuestData={setGuestData}
                />
              </Box>
              <FormControl sx={styles.feedbackWrapper}>
                <Typography variant="body1">¿Qué menú prefieres?</Typography>
                <RadioGroup
                  aria-labelledby="menu-selection"
                  name="menuchoice"
                  onChange={(event) => handleChange(event, guestId)}
                  defaultValue={menuItems[0]}
                >
                  {menuItems.map((item, i) => {
                    return (
                      <FormControlLabel
                        key={i}
                        value={item}
                        control={<Radio />}
                        label={item}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
