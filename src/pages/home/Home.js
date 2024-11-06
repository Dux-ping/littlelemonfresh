import React from "react";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with
          a modern twist.
        </p>
        <button onClick={() => alert("Reserve a table functionality coming soon!")}>
          Reserve a Table
        </button>
      </main>
    </div>
  );
}

export default Home;
