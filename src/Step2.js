import React, { Component } from "react";
import "./icon.css";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="icon step2">
        <div className="step2icon" />
        <h1>Log Your Purchases- Earn Points, Levels, and Achievements</h1>
      </div>
    );
  }
}
