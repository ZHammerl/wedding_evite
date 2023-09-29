import { AlertColor } from "@mui/material";

export type MenuItems = {
  home: string;
  details: string;
  extras: string;
  contact: Contact;
  RSVP: string;
};

export type Contact = {
  id: string;
  contactOne: string[];
  contactTwo?: string[];
};

<<<<<<< HEAD
export type MenuType = {
  menuOne: string;
  menuTwo: string;
=======
export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type NotificationProps = {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
>>>>>>> develop
};
