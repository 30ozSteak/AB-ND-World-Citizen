import React, { Component } from "react";
import Menu from "./Menu";
import "./App.css";
import { UsStates } from "./NearbyPeople";
import Notifications from "./Notifications";
import InfoButton from "./InfoButton.js";
import NearbyCard from "./NearbyCard";

export default class Play extends Component {
  constructor() {
    super();
    this.state = {
      fetchSent: false,
      expanded: false,
      address: "",
      city: "",
      state: "",
      location: []
    };
  }

  getLocation = (address, city, state) => {
    this.setState({
      fetchSent: true
    });

    fetch(
      `https://cors-anywhere.herokuapp.com/https://world-citizen.herokuapp.com/api/v1/stamps/all?address=${address}&city=${city}&state=${state}`
    )
    .then(response =>
      response.json().then(data => {
        this.setState({
          location: data
        });
      })
    )
    .catch(err => console.log(err));
  };

  expandSearch = () => {
    this.setState({
      expanded: true
    });
  };

  closeSearch = () => {
    this.getLocation(this.state.address, this.state.city, this.state.state);
    this.setState({
      expanded: false
    });
  };

  setAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  setCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  setTheState = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const states = UsStates;
    return (
      <div className="play-container">
        <h4>Play</h4>
        <p className="play-description">
          Search for Charitable Companies near you
        </p>
        <form
          className={
            "play-form " + (this.state.expanded && "play-form-expanded")
          }
        >
          <div className="play-search-first-line">
            <input
              onFocus={this.expandSearch}
              className="play-input"
              type="text"
              placeholder="Address"
              onChange={this.setAddress}
            />
            <article className="play-form-divider" />
            <input
              className="play-button"
              type="button"
              onClick={this.closeSearch}
              value="Submit"
            />
          </div>
          {this.state.expanded && (
            <div className="play-search-dropdown">
              <input
                type="text"
                placeholder="City"
                className="play-city-input"
                onChange={this.setCity}
              />
              <p className="state-select-word">State:</p>
              <select
                className="play-state-dropdown"
                onChange={this.setTheState}
              >
                <option value="State" disabled>
                  State
                </option>
                {states.map(state => {
                  return <option value={state}> {state} </option>;
                })}
              </select>
            </div>
          )}
        </form>
        {!this.state.location.length &&
          this.state.fetchSent && (
            <div id="fountainG">
              <div id="fountainG_1" className="fountainG" />
              <div id="fountainG_2" className="fountainG" />
              <div id="fountainG_3" className="fountainG" />
              <div id="fountainG_4" className="fountainG" />
              <div id="fountainG_5" className="fountainG" />
              <div id="fountainG_6" className="fountainG" />
              <div id="fountainG_7" className="fountainG" />
              <div id="fountainG_8" className="fountainG" />
            </div>
          )}
        <section className="nearbycard-container">
          {this.state.location.map(place => {
            return (
              <NearbyCard
                name={place.item.business_name}
                category={place.item.category_id}
                product={place.item.name}
                cause={place.item.organization}
                location={place.item.business_location}
                distance={place.distance}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
