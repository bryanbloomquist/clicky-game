import React from "react";
import "../styles/Navbar.css";

const Navbar = ( props ) => {
  return (
    <nav className = "navbar navbar-expand-lg">
      <a className = "navbar-brand h1 navbar-item logo m-0" href = "./clicky-game">
        <img src = "images/venture.jpg" alt = "Venture Bros Logo"/>
      </a>
      <span 
        className = "instructions navbar-item"
        style = {{ color: props.divStyle }}
      >
        { props.display }
      </span>
      <span className = "scoreboard navbar-item ">
        Score: { props.score }<br/> Top Score: { props.highScore }
      </span>
    </nav>
  );
}

export default Navbar;