import "./Home.css";
import { Link } from "react-router-dom";
import cover from "../assets/images/restauranfood.jpg";
import DishCardSection from "../components/DishCardSection";
import TestimonialsSection from "../components/TestimonialsSection";
import About from "../pages/About";
import Footer from "./Footer";
import scrollWithOffset from "../components/scrollWithOffset";

function Home() {
  return (
    <div>
      <section id="home" className="home">
        <div className="container grid">
          <div className="home-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
            <Link className="button-primary" to="/reservation" scroll={scrollWithOffset}>
              Reserve a table
            </Link>
          </div>
          <img className="home-image" src={cover} alt="Little Lemon Restaurant food" />
        </div>
      </section>
      <section id="menu">
        <DishCardSection />
      </section>
      <TestimonialsSection />
      <section id="about">
        <About />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
