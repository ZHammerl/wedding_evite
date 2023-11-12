export interface Event {
  _id: string;
  userId: string;
  title?: string;
  nameOne: string;
  nameTwo: string;
  date: string;
  time: string;
  contact: Contact[];
  locations: Location[];
  message?: string;
  image: string;
  menus: string[];
  gifts: string[];
  dressCode: string;
  childPolicy: boolean;
  createdAt?: Date;
  guestCount: number;
}

export interface Location {
  id?: string;
  title: string;
  name?: string;
  image?: string;
  date: string;
  time: string;
  address: string;
}

export interface Contact {
  id?: string;
  title?: string;
  name: string;
  phone: string;
  inChargeOf?: string;
}
