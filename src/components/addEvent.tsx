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
} from "@mui/material";
import { EventValidate } from "@helpers/validateForm";
import { useNotification } from "@root/context/notification.context";
import { EventObject } from "@interfaces/interfaces";
import ContactsForm from "@components/contactsForm";
import LocationsForm from "@components/locationsForm";
import CouplesNamesForm from "@components/couplesNamesForm";

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
  });

  const { getError, getSuccess } = useNotification();

  const handleInputChangeSimple = (
    e: React.ChangeEvent<HTMLInputElement> | HTMLTextAreaElement
  ) => {
    const { value, name } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleInputChange = (
    e,
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
      <Card>
        <Typography variant="h4">Add your event</Typography>
        <Typography>Event details</Typography>
        <Box>
          <Typography variant="h4">Give to your guest a message</Typography>
          <TextField
            label="message"
            name="message"
            onChange={(e) => handleInputChangeSimple(e)}
          />
          <TextField
            id="date"
            name="date"
            label="Date"
            onChange={(e) => handleInputChangeSimple(e)}
          />
        </Box>
        <Typography variant="h4">Couple names</Typography>
        <Box component="form" onSubmit={submitHandler}>
          <CouplesNamesForm onInputChange={(e) => handleInputChangeSimple(e)} />

          <Typography>Contacts</Typography>

          <ContactsForm
            contacts={eventData.contact}
            onInputChange={(e, index, fieldName) =>
              handleInputChange(e, index, "contact", fieldName)
            }
            onRemoveField={(index) => handleRemoveField(index, "contact")}
            onAddField={() => handleAddField("contact")}
          />
          <Typography variant="h4">Locations</Typography>

          <LocationsForm
            locations={eventData.locations}
            onInputChange={(e, index, fieldName) =>
              handleInputChange(e, index, "locations", fieldName)
            }
            onRemoveField={(index) => handleRemoveField(index, "locations")}
            onAddField={() => handleAddField("locations")}
          />
          <Divider />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default AddEvent;
