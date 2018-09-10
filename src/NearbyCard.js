import React, { Component } from "react";

export default class NearbyCard extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="nearbycard-card">
        <h2 className="nearbycard-business-name" >BJ's Restaurant & Brewhouse</h2>
        <p className="nearbycard-category" >F&B</p>
        <h3 className="nearbycard-item">Pizookie</h3>
        <p className="nearbycard-cause">Cystic Fibrosis Foundation</p>
        <h2 className="nearbycard-distance">17.3 mi</h2>
      </div>
    )
  }
}


