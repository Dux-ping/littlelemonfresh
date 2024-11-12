import React from "react";
import DishCard from "../components/DishCard";
import "./DishCardSection.css";
import greeksalad from "../assets/images/greeksalad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemondessert from "../assets/images/lemondessert.jpg";
import { HashLink } from "react-router-hash-link";

const DishCardSection = () => {
  return (
    <section className="dish-card-section grid">
      <div className="title-container">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" tp="/#menu">
          Oline menu
        </HashLink>
      </div>
      <div className="dish-cards-container">
        <DishCard
          image={greeksalad}
          title="Greek Salad"
          description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          price="10.00"
        />
        <DishCard
          image={bruchetta}
          title="Bruschetta"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          price="6.79"
        />
        <DishCard
          image={lemondessert}
          title="Lemon Dessert"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          price="8.50"
        />
      </div>
    </section>
  );
};

export default DishCardSection;
