import React from "react";
import "./About.css";
import image1 from "../assets/images/MarioandAdrianA.jpg";
import image2 from "../assets/images/MarioandAdrianb.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Mario and Adrian, two longtime friends, decided to open a cozy Mediterranean restaurant
            named Little Lemon in their neighborhood. With Mario’s passion for culinary arts and
            Adrian’s knack for hospitality, they aimed to create a welcoming place that served
            simple yet unforgettable dishes. Each day, Mario would carefully select fresh
            ingredients, crafting vibrant salads, delicious pasta, and exquisite lemon tarts, while
            Adrian would warmly greet every guest, ensuring they felt right at home.
          </p>
        </div>
        <div className="about-images">
          <img src={image1} alt="Mario and Adrian A" className="image1" />
          <img src={image2} alt="Mario and Adrian B" className="image2" />
        </div>
      </div>
    </section>
  );
}

export default About;
