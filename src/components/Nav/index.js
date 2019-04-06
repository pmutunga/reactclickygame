import React from "react";
import "./style.css";

function Nav (props) {
  return (
  <nav className="navbar fixed-top">
  <h2 className="navbar-game">Clicky Game</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <p><span className="navbar-text" id="user-message">
  { props.message}
  </span>Click an image to begin!</p>
  <p>Score:  
    <span className="navbar-text" id="user-message"> { props.score || 0  }  </span>
        | Top Score:
       <span className="navbar-text" id="top-score"> { props.topscore|| 0 } </span>
    </p>
</nav>
  );
}

export default Nav;


