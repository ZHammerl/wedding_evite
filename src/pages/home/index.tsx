import Details from "@details/Details";
import Hero from "@hero/Hero";
import Rsvp from "@root/features/RSVP/Rsvp";
import Contact from "@root/features/contact/Contact";
import Extras from "@root/features/extras/Extras";
import React, { useEffect, useState } from "react";
import { useAuth } from "@root/context/auth.context";
import { EventObject } from "@interfaces/interfaces";
import { eventService } from "@root/services/api/event.service";

function Home() {
  //api call to get data
  const { setCurrentDataResponse } = useAuth();
  const [eViteInfo, setEViteInfo] = useState<EventObject | null>(null);

  const [eventId, setEventId] = useState<string>("6542ae77ca436fb3748cbb41");

  useEffect(() => {
    const getCurrentInfo = async (id: string) => {
      try {
        const result = await eventService.getEvent(id);
        const eventArray = result.event;
        setCurrentDataResponse(eventArray[0]);
      } catch (error) {
        console.error("Error al obtener la info del evento", error);
      }
    };

    getCurrentInfo(eventId);
  }, [eventId]);

  return (
    <React.Fragment>
      <Hero />
      <Details />
      <Extras />
      <Contact />
      <Rsvp />
    </React.Fragment>
  );
}

export default Home;
