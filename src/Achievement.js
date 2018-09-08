import React, { Component } from "react";

export default class Achievement extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="achievement-container">
        <h3 className="achievement-header">{this.props.stamp}</h3>
        <div className="achievement-slider">
          <div className="achievement-slider-fill" />
          <div>
            <span className="achievement-score" >{this.props.progress}-20</span>
            <img className="achievement-slider-image" src={this.props.trophyIcon} />
          </div>
        </div>
      </div>
    );
  }
}
