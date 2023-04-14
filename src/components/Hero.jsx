import React from "react";
import "./styles/hero.css";
import MoveToBtn from "./widgets/MoveToBtn";

const Hero = () => {
  return (
    <section id="home">
      <div className="left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <br />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <br />
        <MoveToBtn name="Reserve a table" to="booking" />
      </div>
      <div className="right"></div>
    </section>
  );
};

export default Hero;
