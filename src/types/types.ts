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
