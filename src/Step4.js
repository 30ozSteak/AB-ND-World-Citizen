import React, { Component } from "react";
import "./icon.css";

export default class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="icon step4">
        <div className="step4icon" />
        <h1>
          Compete with Fellow Citizens in Your Area and Make the World a Better
          Place!
        </h1>
      </div>
    );
  }
}
