import axios from "axios";

class EventService {
  async getEvent() {
    const response = await axios.get(`event/${eventId}`);
    return response;
  }
}

export const eventService= new EventService();

