import { EventObject } from "@interfaces/interfaces";
import axios from "axios";

class EventService {
  private BASE_URL = "http://localhost:9090/api/v1";
  async addEvent(eventData: EventObject): Promise<EventObject> {
    const {
      title,
      nameOne,
      surnameOne,
      nameTwo,
      surnameTwo,
      date,
      contact,
      locations,
      message,
    } = eventData;
    try {
      const response = await axios.post(`${this.BASE_URL}/event`, {
        title,
        nameOne,
        surnameOne,
        nameTwo,
        surnameTwo,
        date,
        contact,
        locations,
        message,
      });
      console.log(response);
      return response.data as EventObject;
    } catch (e) {
      console.error(`Error login`, e);
      throw e;
    }
  }
}

export const eventService = new EventService();
