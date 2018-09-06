import React, { Component } from "react";

import image from "./Images/me.jpg";
import settingsImage from "./Images/settings.svg";
import Achievement from "./Achievement";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <img id="home-settings-icon" src={settingsImage} />
        <img id="home-profile-picture" src={image} />
        <section id="home-container">
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
        </section>
      </div>
    );
  }
}
