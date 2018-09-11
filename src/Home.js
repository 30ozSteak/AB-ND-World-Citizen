import React, { Component } from "react";

import image from "./Images/me.jpg";
import Achievement from "./Achievement";
import Menu from "./Menu";
import "./App.css";
import trophyImage from "./Images/trophies/006-award-1.png";
import globalCitizen from "./Images/newtrophies/astronaut.svg";
import notificationImage from "./Images/notification.svg";
import userImage from "./Images/teddy-bear.svg";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      localProgress: 5,
      districtProgress: 8,
      regionalProgress: 0,
      nationalProgress: 2,
      globalProgress: 1
    };
  }

  render() {
    return (
      <div>
        <div className="topMenu">
          <h4 className="profile">Profile</h4>
          <h1>Victoria Skillane</h1>
          <h1 className="location">Denver, Co</h1>
        </div>
        <img id="userImage" alt="the users photo" src={userImage} />
        <section id="home-info-container">
          <Achievement
            stamp={"Local Citizenship"}
            progress={this.state.localProgress}
            trophyIcon={globalCitizen}
          />
          <Achievement
            stamp={"District Citizenship"}
            progress={this.state.districtProgress}
            trophyIcon={trophyImage}
          />
          <Achievement
            stamp={"Regional Citizenship"}
            progress={this.state.regionalProgress}
            trophyIcon={trophyImage}
          />
          <Achievement
            stamp={"National Citizenship"}
            progress={this.state.nationalProgress}
            trophyIcon={trophyImage}
          />
          <Achievement
            stamp={"Global Citizenship"}
            progress={this.state.globalProgress}
            trophyIcon={trophyImage}
          />
        </section>
      </div>
    );
  }
}
