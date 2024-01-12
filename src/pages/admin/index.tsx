import AdminContacts from "@root/features/admin/contacts/AdminContacts";
import GuestList from "@root/features/admin/guestList/GuestList";
import React, { useEffect, useState } from "react";
import HeroAdmin from "@root/features/admin/hero/HeroAdmin";
import AddEvent from "@components/addEvent/addEvent";
import { EventObject } from "@interfaces/interfaces";
import * as styles from "./index.styles";
import { Container } from "@mui/material";
import { useAuth } from "@root/context/auth.context";
import { eventService } from "@root/services/api/event.service";

function AdminPage() {
  const { loginResult } = useAuth();
  const [eventData, setEventData] = useState(null);

  const getEventData = async (userId) => {
    try {
      const eventData = await eventService.getEvent(userId);
      setEventData(eventData);
    } catch (error) {
      console.error("error setEventData");
    }
  };
  useEffect(() => {
    setEventData(loginResult);
    const { user } = loginResult;
    getEventData(user._id);
  }, [eventData]);

  return (
    <React.Fragment>
      <Container sx={styles.container}>
        <HeroAdmin />
        {!eventData && <AddEvent />}
        <AdminContacts />
        <GuestList />
      </Container>
    </React.Fragment>
  );
}

export default AdminPage;
