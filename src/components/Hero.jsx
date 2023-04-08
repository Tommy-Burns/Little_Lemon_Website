import React from "react";
import "./styles/hero.css";
import chef from "../assets/imgs/restauranfood.jpg";

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
        <button>Reserve a table</button>
      </div>
      <div className="right">
        {/* <img src={chef} alt="Chef holding hot dogs" /> */}
      </div>
    </section>
  );
};

export default Hero;
