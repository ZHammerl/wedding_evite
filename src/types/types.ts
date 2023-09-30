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
<<<<<<< HEAD

=======
=======

export type MenuType = {
  menuOne: string;
  menuTwo: string;
}
>>>>>>> dbac4f27c5282aa89686ade8917eb1021df6c7db
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
<<<<<<< HEAD
>>>>>>> 8d14546dd0e56dcb9edcfdb262c010e8ef122b47
=======
>>>>>>> dbac4f27c5282aa89686ade8917eb1021df6c7db
