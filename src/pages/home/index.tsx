import Details from "@details/Details";
import Hero from "@hero/Hero";
import Rsvp from "@root/features/RSVP/Rsvp";
import Contact from "@root/features/contact/Contact";
import Extras from "@root/features/extras/Extras";
import React from "react";

function Home() {
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
