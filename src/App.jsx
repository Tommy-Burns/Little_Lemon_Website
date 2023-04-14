import { useState, useEffect } from "react";
import "./App.css";
import {
  About,
  Hero,
  Footer,
  Navbar,
  Specials,
  Testimonials,
  Booking,
} from "./components";

const App = () => {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`
    )
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;
