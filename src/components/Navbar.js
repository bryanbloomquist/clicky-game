import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className = "navbar navbar-expand-lg">
      <a className = "navbar-brand h1" href = "/">The Venture Bros</a>
      <ul className = "navbar-nav mx-auto">
        <li className = "nav-item">
          Click an image to begin {/* Figure out how to make this dynamic */}
        </li>
        <li className = "nav-item">
          Score: 0 | Top Score: 0 {/* Figure out how to make this dynamic */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;