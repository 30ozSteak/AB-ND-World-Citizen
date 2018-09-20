import React, { Component } from "react";

import image from "./Images/me.jpg";
import Achievement from "./Achievement";
import Menu from "./Menu";
import Purchase from "./Purchase";
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
      local: 15,
      district: 0,
      regional: 10,
      national: 5,
      global: 15
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
            trophyIcon={localCitizen}
            style="var(--blueGreen)"
            points={this.props.citizenship.local}
          />
          <Achievement
            stamp={"District Citizenship"}
            trophyIcon={districtCitizen}
            style="var(--peachy)"
            points={this.props.citizenship.district}
          />
          <Achievement
            stamp={"Regional Citizenship"}
            trophyIcon={regionalCitizen}
            style="var(--decent)"
            points={this.props.citizenship.regional}
            />
          <Achievement
            stamp={"National Citizenship"}
            trophyIcon={nationalCitizen}
            style="var(--tranquil)"
            points={this.props.citizenship.national}
            />
          <Achievement
            stamp={"Global Citizenship"}
            trophyIcon={globalCitizen}
            style="var(--pinkish)"
            points={this.props.citizenship.global}
          />
        </section>
      </div>
    );
  }
}
