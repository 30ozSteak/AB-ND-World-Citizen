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

    this.state = {};
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
            trophyIcon={localCitizen}
            style="var(--blueGreen)"
          />
          <Achievement
            stamp={"District Citizenship"}
            trophyIcon={districtCitizen}
            style="var(--peachy)"
          />
          <Achievement
            stamp={"Regional Citizenship"}
            trophyIcon={regionalCitizen}
            style="var(--decent)"
            />
          <Achievement
            stamp={"National Citizenship"}
            trophyIcon={nationalCitizen}
            style="var(--tranquil)"
            />
          <Achievement
            stamp={"Global Citizenship"}
            trophyIcon={globalCitizen}
            style="var(--pinkish)"
          />
        </section>
      </div>
    );
  }
}
