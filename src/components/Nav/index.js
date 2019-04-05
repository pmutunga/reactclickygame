import React from "react";
import "./style.css";

function Nav (props) {
  return (
  <nav className="navbar">{props.children}
  <h2 className="navbar-brand">Clicky Game</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
  );
}

export default Nav;


