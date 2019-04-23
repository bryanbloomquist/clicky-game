import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className = "navbar navbar-expand-lg">
      <a className = "navbar-brand h1  navbar-item m-0" href = "/">The Venture Bros</a>
      <span className = "instructions navbar-item">
        Click an image to begin {/* Figure out how to make this dynamic using handleInputChange (maybe?) */}
      </span>
      <span className = "scoreboard navbar-item ">
        Score: 0 | Top Score: 0 {/* Figure out how to make this dynamic */}
      </span>
    </nav>
  );
}

export default Navbar;