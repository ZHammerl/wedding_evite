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

=======
export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type NotificationProps = {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};
>>>>>>> 8d14546dd0e56dcb9edcfdb262c010e8ef122b47
