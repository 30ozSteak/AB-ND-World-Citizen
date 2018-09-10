import React, { Component } from "react";
import Menu from "./Menu";
import "./App.css";
import { UsStates } from "./NearbyPeople";
import Settings from "./Settings";
import InfoButton from "./InfoButton.js";

export default class Play extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      address: "",
      city: "",
      state: ""
    };
  }

  expandSearch = () => {
    this.setState({
      expanded: true
    });
  };

  closeSearch = () => {
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
        <InfoButton />
        <Settings />
        <form className="play-form">
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
      </div>
    );
  }
}
