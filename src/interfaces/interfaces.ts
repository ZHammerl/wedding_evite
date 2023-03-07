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
