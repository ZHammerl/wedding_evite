import { EventObject } from "@interfaces/interfaces";
import axios from "axios";
import { Event } from "../../interfaces/Event";

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
  async getEvent(userId: string) {
    try {
      const response = await axios.get(`${this.BASE_URL}/event/${userId}`);
      // console.log(response, "service get event");
      return response.data;
    } catch (error) {
      console.log(userId);
      console.error("error getEvent", error);
      throw error;
    }
  }
}

export const eventService = new EventService();
