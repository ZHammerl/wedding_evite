export interface MenuItems {
  home: string;
  details: string;
  extra: string;
  contact: string[];
  RSVP: string;
}

export interface WeddingObjectProject {
  nameOne: string;
  nameTwo: string;
  menu: MenuItems;
}
export interface ContactObject {
  contactOne: string[];
  contactTwo?: string[];
}

export interface Guest {
  _id: string;
  name: string;
  surname: string;
  status: Boolean;
  menuChoice: string;
  additionalGuest: boolean;
}

export interface GuestItem {
  _id: number | string;
  guests: Guest[];
}

export interface LocationObject {
  id: string;
  title: string;
  image: string;
  name: string;
  date: string;
  time: string;
  address: string;
}

export interface WeddingHelper {
  id: number;
  title?: string;
  inChargeOf?: string;
  name: string;
  phone: string;
}
