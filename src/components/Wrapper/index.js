import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className= "wrapper">{props.children}</div>;
}
// const Wrapper = props => <div className= {props.shakeWrapper==="true" ? "wrapperShake" : "wrapper"}>{props.pictures}</div>;

export default Wrapper;
