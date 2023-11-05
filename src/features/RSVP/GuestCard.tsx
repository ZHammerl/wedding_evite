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
import { GuestItem } from "@interfaces/interfaces";
import { MenuType } from "@root/types/types";

type Props = {
  guestData: GuestItem;
  setGuestData: React.Dispatch<React.SetStateAction<GuestItem>>;
  removeGuest: (id: string | number) => void;
  menu: MenuType;
};
export const GuestCards = ({
  guestData,
  setGuestData,
  removeGuest,
  menu,
}: Props) => {
  const menuItems: string[] = Object.keys(menu);

  useEffect(() => {
    const updatedGuests = [...guestData.guests];

    updatedGuests.forEach((guest) => {
      guest.menuChoice = menu[menuItems[0] as keyof MenuType];
    });

    setGuestData({
      ...guestData,
      guests: updatedGuests,
    });
  }, []);

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
        const { _id: guestId, name, additionalGuest } = guest;

        return (
          <Card key={guestId} variant="outlined">
            <CardContent sx={styles.cardContent}>
              {name != "" && additionalGuest === false ? (
                <Box>
                  <Typography variant="h6">{name}</Typography>
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
                      id="name"
                      label="Nombre"
                      name="name"
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
                  name="menuChoice"
                  onChange={(event) => handleChange(event, guestId)}
                  defaultValue={menu[menuItems[0] as keyof MenuType]}
                >
                  {menuItems.map((key, i) => {
                    return (
                      <FormControlLabel
                        key={i}
                        value={menu[key as keyof MenuType]}
                        control={<Radio />}
                        label={menu[key as keyof MenuType]}
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
