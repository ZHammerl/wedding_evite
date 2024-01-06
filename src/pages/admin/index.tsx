import AdminContacts from "@root/features/admin/contacts/AdminContacts";
import GuestList from "@root/features/admin/guestList/GuestList";
import React, { useState } from "react";
import HeroAdmin from "@root/features/admin/hero/HeroAdmin";
import AddEvent from "@components/addEvent/addEvent";
import { EventObject } from "@interfaces/interfaces";
import * as styles from "./index.styles";
import { Container } from "@mui/material";

function AdminPage() {
  const event = false;

  return (
    <React.Fragment>
      <Container sx={styles.container}>
        <HeroAdmin />
        {!event && <AddEvent />}
        <AdminContacts />
        <GuestList />
      </Container>
    </React.Fragment>
  );
}

export default AdminPage;
