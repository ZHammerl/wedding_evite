import AdminContacts from "@root/features/admin/contacts/AdminContacts";
import GuestList from "@root/features/admin/guestList/GuestList";
import React from "react";
import HeroAdmin from "@root/features/admin/hero/HeroAdmin";
import AddEvent from "@components/addEvent";

function AdminPage() {
  const event = false;
  return (
    <React.Fragment>
      <HeroAdmin />
      {!event && <AddEvent />}
      <GuestList />
      <AdminContacts />
    </React.Fragment>
  );
}

export default AdminPage;
