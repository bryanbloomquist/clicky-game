import React from "react";
import "../styles/Container.css";

const Container = ( props ) => {
  return ( <div className = "container animated zoomIn delay-1s">{ props.children }</div> );
}

export default Container;