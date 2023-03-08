import AdminContacts from "@adminContacts/AdminContacts";
import Footer from "@footer/Footer";
import GuestList from "@guestList/GuestList";
import { Container } from "@mui/system";
import React from "react";

function AdminPage() {
  return (
    <React.Fragment>
      <GuestList />
      <AdminContacts />
    </React.Fragment>
  );
}

export default AdminPage;
