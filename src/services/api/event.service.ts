import axios from "axios";
import { Event } from "../../interfaces/Event";

class EventService {
  // development base url
  private BASE_URL = "http://localhost:9090/";
  async getEvent(eventId: string): Promise<Event> {
    try {
      const response = await axios.get(`event/${eventId}`);
      return response.data as Event;
    } catch (e) {
      console.error(`Error getting event with ID ${eventId}`, e);
      throw e;
    }
  }
}

export const eventService = new EventService();
