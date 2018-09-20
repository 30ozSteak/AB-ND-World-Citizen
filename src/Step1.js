import React, { Component } from "react";
import "./icon.css";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="icon step1">
        <div className="step1icon" />
        <h1>Shop from Socially Conscious Companies</h1>
        <p className="subtext2">What does this mean?</p>
      </div>
    );
  }
}
