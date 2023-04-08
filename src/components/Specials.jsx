import React from "react";
import FoodCard from "./widgets/FoodCard";
import "./styles/specials.css";
import menudata from "../assets/menuData";

const Specials = () => {
  return (
    <section id="specials">
      <div className="top">
        <h1>This week specials!</h1>
        <button>Online Menu</button>
      </div>
      <div>
        <div className="bottom">
          {menudata.map((item) => (
            <div key={item.id}>
              <FoodCard
                image={item.image}
                name={item.name}
                price={item.price}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
