import React, { Component } from "react";
import Menu from "./Menu";
import Nearby from "./Nearby";
import "./App.css";
import { NearbyPeople } from "./NearbyPeople";
import profilePic from "./Images/me.jpg";
import Settings from "./Settings.js";
import InfoButton from "./InfoButton.js";

export default class Social extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const people = NearbyPeople;
    return (
      <div>
        <InfoButton />
        <Settings />
        <div className="nearby-container">
          {people.map(person => {
            return (
              <Nearby
                name={person.name}
                profile={person.picture}
                distance={person.distance}
                achievements={person.achievements}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
