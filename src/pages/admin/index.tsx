import AdminContacts from "@root/features/admin/contacts/AdminContacts";
import GuestList from "@root/features/admin/guestList/GuestList";
import React, { useState } from "react";
import HeroAdmin from "@root/features/admin/hero/HeroAdmin";
import AddEvent from "@components/addEvent";
import { EventObject } from "@interfaces/interfaces";

function AdminPage() {
  const event = false;
  // const [eventData, setEventData] = useState<EventObject>({
  //   title: "",
  //   nameOne: "",
  //   surnameOne: "",
  //   nameTwo: "",
  //   surnameTwo: "",
  //   date: "",
  //   contact: [{ title: "", name: "", phone: "", inChargeOf: "" }],
  //   locations: [{ title: "", name: "", date: "", time: "", address: "" }],
  //   message: "",
  // });
  return (
    <React.Fragment>
      <HeroAdmin />
      {!event && <AddEvent />}
      <AdminContacts />
      <GuestList />
    </React.Fragment>
  );
}

export default AdminPage;
