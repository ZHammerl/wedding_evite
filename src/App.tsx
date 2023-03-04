import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Navbar from "./features/navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <Extra />
      <Contact />
      <RSVP />
    </div>
  );
}

export default App;
