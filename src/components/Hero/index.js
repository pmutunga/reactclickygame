import React from "react";
import "./style.css";


function Hero(props) {
  return (
  <div className= "header">
    <h1 className="display-header">Clicky Game!</h1>
  <p className="lead-message">Click on an image to earn points, but don't click any more than once!</p>{props.children}
   </div>

 
  );
}

export default Hero;
