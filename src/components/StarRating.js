import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {rating.map((value, index) => (
        <FontAwesomeIcon key={index} icon={value === 1 ? faStar : faStarHalfAlt} className="star" />
      ))}
    </div>
  );
};

export default StarRating;
