import React, { Component } from "react";

export default class Nearby extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <div className="nearby-card" onClick={this.expand} >
        <div>
          <img className="nearby-profile-pic" src={this.props.profile} />
          <h3 className="nearby-person-name" >{this.props.name}</h3>
        </div>
        <h4 className="nearby-distance" > {this.props.distance} </h4>
        {
          this.state.expanded &&
          <div>
            <h4> Achievements:</h4>
            <ul className="nearby-achievement-list" >
              {
                !this.props.achievements.length &&
                  <p className="nearby-sorry" >Sorry, {this.props.name} doesn't have any achievements yet</p>
              } 
              {
                this.props.achievements && 
                this.props.achievements.map(achievement => {
                  return <li className="nearby-list-item"> {achievement} </li>
                })
              }
            </ul>
          </div>
       }
      </div>
    );
  }
}
