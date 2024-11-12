import "./Home.css";
import { HashLink } from "react-router-hash-link";
import cover from "../assets/images/restauranfood.jpg";
import DishCardSection from "../components/DishCardSection";
import TestimonialsSection from "../components/TestimonialsSection";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="container grid">
          <div className="home-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
            <HashLink className="button-primary" to="/reservations">
              Reserve a table
            </HashLink>
          </div>
          <img className="home-image" src={cover} alt="Little Lemon Restaurant food" />
        </div>
      </section>
      <DishCardSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
