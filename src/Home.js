import React, { Component } from "react";

import image from "./Images/me.jpg";
import Achievement from "./Achievement";
import Menu from "./Menu";
import trophyImage from "./Images/trophies/006-award-1.png";
import Settings from "./Settings";

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
        <Settings />
        <img id="home-profile-picture" alt="the users profile" src={image} />
        <section id="home-info-container">
          <Achievement
            stamp={"Local Citizenship"}
            progress={this.state.localProgress}
            trophyIcon={trophyImage}
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
          <Menu />
        </section>
      </div>
    );
  }
}
