import "./DishCard.css";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const DishCard = ({ image, title, description, price }) => {
  return (
    <article className="dish-card">
      <div className="disch-image">
        <img src={image} alt={title} />
      </div>
      <div className="dish-header">
        <h3>{title}</h3>
        <span>£ {price}</span>
      </div>
      <div className="dish-footer">
        <p>{description}</p>
        <HashLink to="/#">
          Out for Delivery <FontAwesomeIcon icon={faMotorcycle} />
        </HashLink>
      </div>
    </article>
  );
};

export default DishCard;
