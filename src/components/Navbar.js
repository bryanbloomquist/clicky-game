import React from "react";
import "../styles/Navbar.css";

const Navbar = ( props ) => {
  return (
    <nav className = "navbar navbar-expand-lg">
      <a className = "navbar-brand h1  navbar-item m-0" href = "/">The Venture Bros</a>
      <span className = "instructions navbar-item">
        { props.display }
      </span>
      <span className = "scoreboard navbar-item ">
        Score: { props.score } | Top Score: { props.highScore }
      </span>
    </nav>
  );
}

export default Navbar;