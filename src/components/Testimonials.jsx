import React from "react";
import "./styles/testimonials.css";
import ReviewCard from "./widgets/ReviewCard";
import reviewsData from "../assets/reviewsData";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div className="reviews">
        {reviewsData.map((item) => (
          <div className="review" key={item.id}>
            <ReviewCard
              name={item.name}
              image={item.image}
              rate={item.rate}
              review={item.review}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
