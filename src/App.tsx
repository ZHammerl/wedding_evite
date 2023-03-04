import "./App.scss";
import Navbar from "./features/navbar/navbar";
import Hero from "./features/hero/Hero";
import Rsvp from "./features/RSVP/Rsvp";
import Contact from "./features/contact/Contact";
import Extras from "./features/extras/Extras";
import Details from "./features/details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <Extras />
      <Contact />
      <Rsvp />
    </div>
  );
}

export default App;
