import React from "react";
import "./styles/review.css";

const ReviewCard = ({ rate, image, name, review }) => {
  return (
    <div className="r-card">
      <div className="rate">
        <h3>Rate:</h3>
        <h4>{rate}</h4>
      </div>
      <div className="person">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <h4>{review}</h4>
    </div>
  );
};

export default ReviewCard;
