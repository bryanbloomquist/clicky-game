import React from "react";
import "../styles/ClickItem.css";

function ClickItem( props ) {
  return (
    <div 
      className = "imgContainer"
      onClick = { () => props.checkGuess( props.id )}
    >
      <img 
        alt = { props.name } 
        src = { props.image }
        // clicked = { props.clicked }
        className = "token"
      />
    </div>
  );
}

export default ClickItem;