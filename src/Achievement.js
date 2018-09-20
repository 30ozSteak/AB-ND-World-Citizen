import React, { Component } from "react";


export default class Achievement extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      // count: 0
    };
  }

  // componentDidMount = () => {
  //   this.setState({
  //     count: this.props.points
  //   });
  // };

  expandCard = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  increaseCount = () => {
    this.state.count < 20 &&
    this.setState({
      count: this.state.count += 1
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
              onClick={this.increaseCount} >
              <img
                className="achievement-slider-image"
                src={this.props.trophyIcon}
              />
            </div>
          </div>
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
