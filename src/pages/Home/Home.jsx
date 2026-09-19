import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <span className="home-badge">🙏 भक्ति और अभ्यास</span>

        <h1>Hanuman Chalisa</h1>

        <p>
          Listen, read, understand, and practice the Hanuman Chalisa
          step by step.
        </p>

        <div className="home-actions">
          <Link to="/chalisa" className="home-btn">
            🎵 Listen & Practice
          </Link>

          <Link to="/baan" className="home-btn">
            🚩 Hanuman Baan
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;