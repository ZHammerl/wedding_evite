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
  email: string;
  password: string;
  confirmPassword: string;
};
