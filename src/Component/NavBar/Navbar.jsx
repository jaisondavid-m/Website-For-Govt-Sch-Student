import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // closes menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{ textAlign: "center" }}>JJ MATERIALS</div>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar change" : "bar"}></div>
        <div className={menuOpen ? "bar change" : "bar"}></div>
        <div className={menuOpen ? "bar change" : "bar"}></div>
      </div>

      {/* Nav links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/NMMS" onClick={handleLinkClick}>NMMS</Link></li>
        <li><Link to="/social-10th" onClick={handleLinkClick}>10th SOCIAL</Link></li>
        <li><Link to="/social-9th" onClick={handleLinkClick}>9th SOCIAL</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
