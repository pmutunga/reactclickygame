import React from "react";
import "./style.css";

const PictureCard = props => (
 
    <div className="img-container">
      <img
        src={props.image}
        className="float-left img-thumbnail img-responsive"
        alt={props.name}
        onClick={() => props.clickPicture(props.id)}
      />
    </div>
);

export default PictureCard;
