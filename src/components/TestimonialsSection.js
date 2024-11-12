import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import "./TestimonialsSection.css";
import john from "../assets/images/john.webp";
import jane from "../assets/images/jane.webp";
import mike from "../assets/images/mike.webp";
import emily from "../assets/images/emily.webp";

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container grid">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-cards-container">
        <TestimonialsCard
          name="John"
          image={john}
          rating={[1, 1, 1, 1, 1]}
          says="The food was absolutely wonderful, from preparation to presentation, very pleasing."
        />
        <TestimonialsCard
          name="Jane"
          image={jane}
          rating={[1, 1, 1, 1, 0.5]}
          says="A delightful dining experience with fresh, locally-sourced ingredients."
        />
        <TestimonialsCard
          name="Mike"
          image={mike}
          rating={[1, 1, 1, 1, 1]}
          says="The service was excellent, and the atmosphere was cozy and welcoming."
        />
        <TestimonialsCard
          name="Emily"
          image={emily}
          rating={[1, 1, 1, 1, 0.5]}
          says="The dishes were delicious, and the staff was very friendly and attentive."
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
