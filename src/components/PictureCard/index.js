import React from "react";
import "./style.css";


function PictureCard (props){
  return (
    <div className="img-container" >
      <img
        src={props.image}
        className="float-left img-thumbnail img-responsive"
        alt={props.name}
       onClick={()=>props.handleClick(props.id)}
      />
    </div>
);

}
 


export default PictureCard;
