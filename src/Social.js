import React, { Component } from "react";
import Menu from "./Menu";
import Nearby from "./Nearby";
import "./App.css";
import { NearbyPeople } from './NearbyPeople';
import profilePic from "./Images/me.jpg";
import settingsImage from "./Images/settings.svg";

export default class Social extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const people = NearbyPeople;
    return (
      <div>
        <img
          id="home-settings-icon"
          alt="what you click on to get to the settings page"
          src={settingsImage}
        />
        <div className="nearby-container" >
          {
            people.map(person => {
              return <Nearby
              name={person.name}
              profile={person.picture}
              distance={person.distance}
              achievements={person.achievements}
              />
            })
          }
        </div>
        <Menu />
      </div>
    );
  }
}
