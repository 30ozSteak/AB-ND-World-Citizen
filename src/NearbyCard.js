import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NearbyCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  returnCategory = catid => {
    if (catid === 1) {
      return "🍟";
    } else {
      return "📦";
    }
  };

  render() {
    return (
      <div className="nearbycard-card" >
        <div
          className={"default-nearbycard " + (!this.state.expanded && "default-card-small")}>
          <h3 className="nearbycard-business-name">{this.props.name}</h3>
          <p className="nearbycard-distance">{this.props.distance}</p>
        </div>
        <div className="nearbycard-second-row">
          <h3 className="nearbycard-item">{this.props.product}
            <p className="nearbycard-category">
              {
                this.returnCategory(this.props.category)
              }
            </p>
          </h3>
          <NavLink to="./Purchase" >
            <button className="play-purchase-button" >Buy this item</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
