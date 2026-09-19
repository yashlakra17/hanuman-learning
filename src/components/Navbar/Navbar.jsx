import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🚩 <span>Hanuman Bhakti</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/chalisa">Chalisa</Link>
        <Link to="/baan">Hanuman Baan</Link>
      </div>
    </nav>
  );
};

export default Navbar;