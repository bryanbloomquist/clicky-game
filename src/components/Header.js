
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className = "jumbotron jumbotron-fluid p-3 mb-0">
      <div className = "header mx-auto">
        <p className = "lead">Click on an image to earn points,</p>
        <p className = "lead">but don't click on any more than once!</p>
      </div>
    </div>
  );
}
export default Header;