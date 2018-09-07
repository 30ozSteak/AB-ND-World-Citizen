import React, { Component } from "react";

import image from "./Images/me.jpg";
import settingsImage from "./Images/settings.svg";
import Achievement from "./Achievement";
import Menu from "./Menu";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          id="home-settings-icon"
          alt="what you click on to get to the settings page"
          src={settingsImage}
        />
        <img id="home-profile-picture" alt="the users profile" src={image} />
        <section id="home-container">
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Menu />
        </section>
      </div>
    );
  }
}
