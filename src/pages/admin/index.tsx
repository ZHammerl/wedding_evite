import AdminContacts from "@adminContacts/AdminContacts";
import GuestList from "@guestList/GuestList";
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
