import React, { Component } from "react";


export default class Achievement extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    };
  }

  expandCard = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  // returnBackground = () => {
  //   return `background: ${prop}`
  // }

  render() {
    return (
      <div className="achievement-container" onClick={this.expandCard} >
        <h3 className="achievement-header">{this.props.stamp}</h3>
        <div className="achievement-slider">
          <div className="achievement-slider-fill" />
          <div className="achievement-data-container">
            <span className="achievement-score">
              {this.props.progress} / 20
            </span>
            <div className="achievement-slider-box" style={{ background: this.props.style }}>
              <img
                className="achievement-slider-image"
                src={this.props.trophyIcon}
              />
            </div>
          </div>
          <div
            className={"down-arrow " + (this.state.expanded && "up-arrow")}
          />
        </div>
        {this.state.expanded && (
          <div className="achievement-expanded">
            <div className="achievement-divider" />
            <p className="achievement-expanded-message">
              You have earned <strong>{this.props.progress}</strong> points
              towards your {this.props.stamp}
            </p>
          </div>
        )}
      </div>
    );
  }
}
