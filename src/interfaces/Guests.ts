export interface Guests {
  _id: string;
  eventId: string;
  guests: Guest[];
  extraGuestPermission: boolean;
  isConfirmed: boolean;
  message?: string;
}

export interface Guest {
  _id: string;
  familyId: string;
  firstName: string;
  surname: string;
  email?: string;
  isConfirmed: boolean;
  menuchoice: string;
  additionalGuest?: boolean
}
