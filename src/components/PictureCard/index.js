import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

       
        <img src={props.image} className="float-left img-thumbnail" alt={props.name}></img>

  );
}

export default FriendCard;
