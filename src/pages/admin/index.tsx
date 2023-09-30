import AdminContacts from "@root/features/admin/contacts/AdminContacts";
import GuestList from "@guestList/GuestList";
import React from "react";
import HeroAdmin from "@root/features/admin/hero/HeroAdmin";

function AdminPage() {
  return (
    <React.Fragment>
      <HeroAdmin />
      <GuestList />
      <AdminContacts />
    </React.Fragment>
  );
}

export default AdminPage;
