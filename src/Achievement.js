import React, { Component } from "react";
import Confetti from 'react-dom-confetti';

const config = {
  angle: 0,
  spread: 180,
  startVelocity: 25,
  elementCount: 150,
  decay: 0.94
};

export default class Achievement extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      confetti: false
    };
  }

  expandCard = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  shootConfetti = () => {
    this.setState({
      confetti: !this.state.confetti
    })
  }

  render() {
    return (
      <div className="achievement-container" >
        <h3 className="achievement-header" onClick={this.expandCard} >{this.props.stamp}</h3>
        <div className="achievement-slider">
          <div className="achievement-slider-fill"
            style={{ width: this.props.points * 5 + "%"}} 
            onClick={this.expandCard}/>
          <div className="achievement-data-container"  >
            <span className="achievement-score" onClick={this.expandCard}>
              {this.props.points} / 20
            </span>
            <div className={"achievement-slider-box " + (this.props.points < 20 && "grayscale-box") }
              style={{ background: this.props.style }}               
              onClick={this.shootConfetti} >

              <img
                className="achievement-slider-image"
                src={this.props.trophyIcon}
              />
            </div>
          </div>
          <Confetti active={this.state.confetti} config={config} />
          <div
            onClick={this.expandCard}
            className={"down-arrow " + (this.state.expanded && "up-arrow")}
          />
        </div>
        {this.state.expanded && (
          <div className="achievement-expanded" onClick={this.expandCard} >
            <div className="achievement-divider" />
            <p className="achievement-expanded-message">
              You have earned <strong>{this.props.points}</strong> points
              towards your {this.props.stamp}
            </p>
          </div>
        )}
      </div>
    );
  }
}
