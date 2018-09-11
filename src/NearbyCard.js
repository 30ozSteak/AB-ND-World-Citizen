import React, { Component } from "react";

export default class NearbyCard extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    }
  }

  returnCategory = (catid) => {
    if (catid === 1) {
      return '🍟';
    } else {
      return '📦';
    }
  }

  expandCard = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <div className="nearbycard-card" onClick={this.expandCard}>
        <div className={"default-nearbycard " + (!this.state.expanded && "default-card-small")}>
          <h3 className="nearbycard-business-name" >{this.props.name}</h3>
          <p className="nearbycard-distance">{this.props.distance}</p>
        </div>
        <div className="nearbycard-second-row">
          <h3 className="nearbycard-item">{this.props.product}</h3>
          <p className="nearbycard-category" >{
            this.returnCategory(this.props.category)}
          </p>
        </div>
        {
          this.state.expanded &&
          <div className="expanded-nearbycard">
            <p className="nearbycard-cause">Cause: {this.props.cause}</p>
            <p className="nearbycard-business-location">{this.props.location}</p>
          </div>
        }
      </div>
    )
  }
}


