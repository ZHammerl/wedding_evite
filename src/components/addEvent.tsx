import React, { useState } from "react";
import {
  AppBar,
  Drawer,
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
import {
  ContactObject,
  EventObject,
  LocationObject,
} from "@interfaces/interfaces";

function AddEvent() {
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
  // const [contacts, setContacts] = useState<ContactObject[{}]>([]);
  // const [locations, setLocations] = useState<LocationObject[{}]>([]);
  const { getError, getSuccess } = useNotification();

  const onChangeHandel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleInputChange = (e, index, arrayName, fieldName) => {
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

  const handleRemoveField = (index: string, arrayName: string) => {
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
        <Typography variant="h5">Couple names</Typography>
        <Box component="form" onSubmit={submitHandler}>
          <Stack direction="row" spacing={2}>
            <TextField
              id="nameOne"
              name="nameOne"
              onChange={(e) => onChangeHandel(e)}
              label="Name"
            />
            <TextField
              id="surnameOne"
              name="surnameOne"
              onChange={(e) => onChangeHandel(e)}
              label="Surname"
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              id="nameTwo"
              name="nameTwo"
              onChange={(e) => onChangeHandel(e)}
              label="Name"
            />
            <TextField
              id="surnameTwo"
              name="surnameTwo"
              onChange={(e) => onChangeHandel(e)}
              label="Surname"
            />
          </Stack>
          <Typography>Event details</Typography>
          <Grid
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
          >
            <Grid item>
              <TextField
                id="date"
                name="date"
                label="Date"
                onChange={(e) => onChangeHandel(e)}
              />
              <TextField
                id="time"
                name="time"
                label="Time"
                onChange={(e) => onChangeHandel(e)}
              />
            </Grid>
          </Grid>
          <Typography>Contacts</Typography>
          {eventData.contact.map((contact, index) => (
            <Box key={index}>
              <TextField
                label="Title"
                value={contact.title}
                onChange={(e) =>
                  handleInputChange(e, index, "contact", "title")
                }
              />
              <TextField
                label="Name"
                value={contact.name}
                onChange={(e) => handleInputChange(e, index, "contact", "name")}
              />
              <TextField
                label="Phone"
                value={contact.phone}
                onChange={(e) =>
                  handleInputChange(e, index, "contact", "phone")
                }
              />
              <TextField
                label="In charge of"
                value={contact.inChargeOf}
                onChange={(e) =>
                  handleInputChange(e, index, "contact", "inChargeOf")
                }
              />
              <Button
                type="button"
                variant="outlined"
                onClick={() => handleRemoveField(index, "contact")}
              >
                Remove Contact
              </Button>
            </Box>
          ))}
          <Button type="button" onClick={() => handleAddField("contact")}>
            Add Contact
          </Button>

          <Typography>Locations</Typography>
          {eventData.locations.map((location, index) => (
            <Box key={index}>
              <TextField
                label="Title"
                value={location.title}
                onChange={(e) =>
                  handleInputChange(e, index, "locations", "title")
                }
              />
              <TextField
                label="Name"
                value={location.name}
                onChange={(e) =>
                  handleInputChange(e, index, "locations", "name")
                }
              />
              <TextField
                label="Date"
                value={location.date}
                onChange={(e) =>
                  handleInputChange(e, index, "locations", "date")
                }
              />
              <TextField
                label="Time"
                value={location.time}
                onChange={(e) =>
                  handleInputChange(e, index, "locations", "time")
                }
              />
              <TextField
                label="Address"
                value={location.address}
                onChange={(e) =>
                  handleInputChange(e, index, "locations", "address")
                }
              />
              <Button
                type="button"
                variant="outlined"
                onClick={() => handleRemoveField(index, "locations")}
              >
                Remove Location
              </Button>
            </Box>
          ))}
          <Button type="button" onClick={() => handleAddField("locations")}>
            Add Location
          </Button>
          <Divider />
          <Typography variant="h4">Give to your guest a message</Typography>
          <TextField
            label="message"
            name="message"
            onChange={(e) => onChangeHandel(e)}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default AddEvent;
