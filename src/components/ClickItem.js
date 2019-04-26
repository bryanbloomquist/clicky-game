import React from "react";
import "../styles/ClickItem.css";

function ClickItem( props ) {
  return (
    <div 
      className = "imgContainer hovereffect"
      onClick = { () => props.checkGuess( props.id )}
    >
      <img 
        alt = { props.name } 
        src = { props.image }
        className = "token"
      />
    </div>
  );
}

export default ClickItem;