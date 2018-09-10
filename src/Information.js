import React, { Component } from "react";
import "./icon.css";
import infoImage from "./Images/info.svg";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <img
          id="info-settings-icon"
          alt="what you click on to get to the settings page"
          src={infoImage}
        />
      </div>
    );
  }
}
