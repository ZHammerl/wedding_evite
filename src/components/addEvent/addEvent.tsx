import React, { useState } from "react";
import {
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
  FormControl,
  TextField,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { EventValidate } from "@helpers/validateForm";
import { useNotification } from "@root/context/notification.context";
import { EventObject } from "@interfaces/interfaces";
import ContactsForm from "@components/contactcsForm/contactsForm";
import LocationsForm from "@components/locationsForm/locationsForm";
import CouplesNamesForm from "@components/couplesNamesForm/couplesNamesForm";
import * as styles from "@components/addEvent/addEvent.style";
import { eventService } from "@root/services/api/event.service";
import DressCodeForm from "@components/dressCodeForm/dressCodeForm";
import MenuOptions from "@components/menuOption/menuOptions";
import ChildPolicyForm from "@components/childPolicyForm/childPolicyForm";
import WishList from "@components/wishList/wishList";

const AddEvent: React.FC = () => {
  const [eventData, setEventData] = useState<EventObject>({
    title: "",
    nameOne: "",
    surnameOne: "",
    nameTwo: "",
    surnameTwo: "",
    date: "",
    contact: [{ title: "", name: "", phone: "", inChargeOf: "" }],
    locations: [{ title: "", name: "", date: "", time: "", address: "" }],
    message: "",
    menus: { with_meat: false, vegetarian: false, vegan: false },
    wishList: [{ store: "", link: "" }],
    dressCode: "",
    childPolicy: false,
  });

  const { getError, getSuccess } = useNotification();

  const handleInputChangeSimple = (
    e: React.ChangeEvent<HTMLInputElement> | HTMLTextAreaElement
  ) => {
    const { value, name } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    arrayName: string,
    fieldName: string
  ) => {
    const { value } = e.target;
    const updatedArray = [...eventData[arrayName]];
    updatedArray[index][fieldName] = value;

    setEventData({
      ...eventData,
      [arrayName]: updatedArray,
    });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(eventData);
    EventValidate.validate(eventData)
      .then(() => {
        getSuccess(JSON.stringify(eventData));
        eventService.addEvent(eventData);
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  const handleRemoveField = (index: number, arrayName: string) => {
    const updateArray = [...eventData[arrayName]];

    updateArray.splice(index, 1);
    setEventData({ ...eventData, [arrayName]: updateArray });
  };

  const handleAddField = (arrayName: string) => {
    setEventData({
      ...eventData,
      [arrayName]: [
        ...eventData[arrayName],
        { title: "", name: "", phone: "", inChargeOf: "" },
      ],
    });
  };

  return (
    <Container>
      <Box component="form" onSubmit={submitHandler}>
        <Card sx={styles.cardContainer}>
          <Typography variant="h3">Add your event</Typography>
          <Typography>Wedding details</Typography>

          <Box sx={styles.section}>
            <Typography variant="h4" sx={styles.subtitle}>
              Give to your guest a message
            </Typography>
            <Stack direction="row" gap={2}>
              <TextField
                label="Save the date message"
                name="message"
                onChange={(e) => handleInputChangeSimple(e)}
              />
              <TextField
                id="date"
                name="date"
                label="Date of big day"
                onChange={(e) => handleInputChangeSimple(e)}
              />
            </Stack>
          </Box>
          <Box sx={styles.section}>
            <CouplesNamesForm
              onInputChange={(e) => handleInputChangeSimple(e)}
            />
          </Box>

          <Box sx={styles.section}>
            <ContactsForm
              list={eventData.contact}
              onInputChange={(e, index, fieldName) =>
                handleInputChange(e, index, "contact", fieldName)
              }
              onRemoveField={(index) => handleRemoveField(index, "contact")}
              onAddField={() => handleAddField("contact")}
            />
          </Box>

          <Box sx={styles.section}>
            <LocationsForm
              list={eventData.locations}
              onInputChange={(e, index, fieldName) =>
                handleInputChange(e, index, "locations", fieldName)
              }
              onRemoveField={(index) => handleRemoveField(index, "locations")}
              onAddField={() => handleAddField("locations")}
            />
          </Box>
          <Box sx={styles.section}>
            <DressCodeForm onInputChange={(e) => handleInputChangeSimple(e)} />
          </Box>
          <Box sx={styles.section}>
            <ChildPolicyForm
              onInputChange={(e) => handleInputChangeSimple(e)}
            />
          </Box>
          <Box sx={styles.section}>
            <MenuOptions
              menuOptions={eventData.menus}
              onInputChange={(e) => handleInputChangeSimple(e)}
            />
          </Box>
          <Box sx={styles.section}>
            <WishList
              onInputChange={(e, index, fieldName) =>
                handleInputChange(e, index, "wishList", fieldName)
              }
              onRemoveField={(index) => handleRemoveField(index, "wishList")}
              onAddField={() => handleAddField("wishList")}
              list={eventData.wishList}
            />
          </Box>
          <Divider />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Card>
      </Box>
    </Container>
  );
};

export default AddEvent;
