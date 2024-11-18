import "./DishCard.css";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import scrollWithOffset from "./scrollWithOffset";

const DishCard = ({ image, title, description, price }) => {
  const capitalizeFirstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <article className="dish-card">
      <div className="disch-image">
        <img src={image} alt={title} />
      </div>
      <div className="dish-header">
        <h3>{capitalizeFirstLetter(title)}</h3>
        <span>£ {price}</span>
      </div>
      <div className="dish-footer">
        <p>{description}</p>
        <HashLink to="/#" scroll={scrollWithOffset}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </HashLink>
      </div>
    </article>
  );
};

export default DishCard;
