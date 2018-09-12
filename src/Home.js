import React, { Component } from "react";

import image from "./Images/me.jpg";
import Achievement from "./Achievement";
import Menu from "./Menu";
import "./App.css";
import trophyImage from "./Images/trophies/006-award-1.png";
import globalCitizen from "./Images/global.svg";
import notificationImage from "./Images/notification.svg";
import userImage from "./Images/teddy-bear.svg";
import localCitizen from "./Images/local.svg";
import districtCitizen from "./Images/district.svg";
import nationalCitizen from "./Images/national.svg";
import regionalCitizen from "./Images/regional.svg";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      localProgress: 8,
      districtProgress: 8,
      regionalProgress: 8,
      nationalProgress: 8,
      globalProgress: 8
    };
  }

  render() {
    return (
      <div>
        <div className="topMenu">
          <h4>Profile</h4>
          <h1>Victoria Skillane</h1>
          <h1 className="location">Denver, Co</h1>
        </div>
        <img id="userImage" alt="the users photo" src={userImage} />
        <section id="home-info-container">
          <Achievement
            stamp={"Local Citizenship"}
            progress={this.state.localProgress}
            trophyIcon={localCitizen}
          />
          <Achievement
            stamp={"District Citizenship"}
            progress={this.state.districtProgress}
            trophyIcon={districtCitizen}
          />
          <Achievement
            stamp={"Regional Citizenship"}
            progress={this.state.regionalProgress}
            trophyIcon={regionalCitizen}
          />
          <Achievement
            stamp={"National Citizenship"}
            progress={this.state.nationalProgress}
            trophyIcon={nationalCitizen}
          />
          <Achievement
            stamp={"Global Citizenship"}
            progress={this.state.globalProgress}
            trophyIcon={globalCitizen}
          />
        </section>
      </div>
    );
  }
}
