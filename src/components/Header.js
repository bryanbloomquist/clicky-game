import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className = "jumbotron jumbotron-fluid p-3 mb-0">
      <div className = "header mx-auto">
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  );
}
export default Header;