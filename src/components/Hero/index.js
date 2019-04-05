import React from "react";
import "./style.css";


function Hero(props) {
  return (
  <div className= "jumbotron header">
    <h1 className="display-4">Clicky Game!</h1>{props.children}
  <p className="lead">Click on an image to earn points, but don't click any more than once!</p>
   </div>

 
  );
}

export default Hero;
