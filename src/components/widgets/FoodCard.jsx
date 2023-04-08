import React from "react";
import "./styles/foodcard.css";

const FoodCard = ({ image, name, price, text }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <div className="others">
        <div className="name-price">
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>
        <p>{text}</p>
        <h3>Order a delivery</h3>
      </div>
    </div>
  );
};

export default FoodCard;
