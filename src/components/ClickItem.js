import React from "react";
import "../styles/ClickItem.css";

const ClickItem = ( props ) => {
  return (
    <div className = "clickItem">
      <div 
        className = "imgContainer"
        // onClick = { () => props.checkGuess( props.id ) }  
      >
        <img alt = { props.name } src = { props.image } class = "token" />
      </div>
    </div>
  );
}

export default ClickItem;