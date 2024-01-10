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

export interface GuestItem {
  _id: number | string;
  guests: Guest[];
}

export interface WeddingHelper {
  id: number;
  title?: string;
  inChargeOf?: string;
  name: string;
  phone: string;
}

export interface Guest {
  id: string;
  familyId: string;
  eventId: string;
  name: string;
  surname?: string;
  menu: string;
  status: boolean;
  additionalGuest: boolean;
}

export interface guestList {
  guestCount: number;
  guestList: Guest[];
}

export interface EventObject {
  id?: string;
  title?: string;
  nameOne: string;
  surnameOne: string;
  nameTwo: string;
  surnameTwo: string;
  date: string;
  contact: ContactObject[];
  locations: LocationObject[];
  message: string;
  menus: MenuObject;
  wishList: WishListObject[];
  dressCode: string;
  childPolicy: boolean;
}
export interface WishListObject {
  store: string;
  link: string;
}

export interface MenuObject {
  with_meat: boolean;
  vegetarian: boolean;
  vegan: boolean;
}

export interface ContactObject {
  id?: string;
  title: string;
  name: string;
  phone: string;
  inChargeOf: string;
}
export interface LocationObject {
  id?: string;
  title: string;
  image?: string;
  name: string;
  date: string;
  time: string;
  address: string;
}

export interface ContactsFormProps {
  contacts: ContactObject[];
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | HTMLTextAreaElement,
    index: number,
    fieldName: string
  ) => void;
  onRemoveField: (index: number) => void;
  onAddField: () => void;
}

export interface ObjectArrayFormProps {
  list: LocationObject | WishListObject;
  onInputChange: (
    e: (event: React.ChangeEvent<HTMLInputElement>) => void,
    index: number,
    fieldName: string
  ) => void;
  onRemoveField: (index: number) => void;
  onAddField: () => void;
}

export interface CouplesNameFormProps {
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | HTMLTextAreaElement
  ) => void;
}

export interface DressCodeFormProps {
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | HTMLTextAreaElement
  ) => void;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  username: string;
}
