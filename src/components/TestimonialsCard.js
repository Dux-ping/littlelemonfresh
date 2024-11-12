import React from "react";
import "./TestimonialsCard.css";
import StarRating from "./StarRating";

const TestimonialsCard = ({ name, image, rating, says }) => {
  return (
    <article className="testimonials-card">
      <div className="testimonials-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonials-content">
        <h3 className="testimonials-name">{name}</h3>
        <div className="testimonials-rating">
          <StarRating rating={rating} />
          <span className="rating-number">{rating.reduce((a, b) => a + b, 0)}/5</span>
        </div>
        <p className="testimonials-says">{says}</p>
      </div>
    </article>
  );
};

export default TestimonialsCard;
