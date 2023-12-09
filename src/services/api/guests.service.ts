import axios from "axios";
import { Guests } from "../../interfaces/Guests";

class GuestsService {
  // development base url
  private BASE_URL = "http://localhost:9090/";
  async getGuestFamily(eventId: string, familyId: string): Promise<Guests> {
    try {
      console.log(12, { eventId, familyId });
      const response = await axios.get(
        `${this.BASE_URL}api/v1/event/confirmation/${eventId}/${familyId}`
      );
      console.log(12.1, response.data);
      return response.data as Guests;
    } catch (e) {
      console.error(`Error getting event with ID ${eventId}`, e);
      throw e;
    }
  }

  async updateGuestFamily(eventId: string, guests: Guests): Promise<Guests> {
    try {
      const response = await axios.post(
        `${this.BASE_URL}api/v1/event/confirmation/${eventId}`,
        guests
      );
      return response.data as Guests;
    } catch (e) {
      console.error(`Error getting event with ID ${eventId}`, e);
      throw e;
    }
  }
}

export const guestsService = new GuestsService();
