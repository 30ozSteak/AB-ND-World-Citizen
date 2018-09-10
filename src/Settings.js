import React, { Component } from "react";
import "./icon.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <img
          id="home-settings-icon"
          alt="what you click on to get to the settings page"
          src={settingsImage}
        />
      </div>
    );
  }
}
