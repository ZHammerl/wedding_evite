export interface Guests {
  _id: string;
  eventId: string;
  guests: Guest[];
  extraGuestPermission: boolean;
  status: boolean;
  message?: string;
}

export interface Guest {
  _id: string;
  familyId: string;
  firstName: string;
  surname: string;
  email?: string;
  status: boolean;
  menuchoice: string;
  additionalGuest?: boolean;
}
