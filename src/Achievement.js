import React, { Component } from "react";

export default class Achievement extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="achievement-container">
        <div className="achievement-slider">
          <div className="achievement-slider-fill" />
        </div>
      </div>
    );
  }
}
