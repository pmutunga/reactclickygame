import React, { Component } from "react";


import "./styles.css";

class Counter extends Component {
  showAlert() {
    alert("Im an alert");
  }

  render() {
    return <button onClick={this.showAlert}>show alert</button>;
  }
}

export default Counter;

