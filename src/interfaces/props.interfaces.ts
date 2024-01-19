import {
  ContactObject,
  EventObject,
  LocationObject,
  WishListObject,
} from "@interfaces/interfaces";

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
  confirmPassword: string;
  username: string;
  lastName: string;
}

export interface DrawerContentProps {
  data: EventObject;
  handleDrawerToggle: () => void;
  handleClick: (item: string) => void;
  navItems: string[];
}
