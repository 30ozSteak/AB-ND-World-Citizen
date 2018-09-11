import React, { Component } from "react";
import "./icon.css";
import "./App.css";
import notificationImage from "./Images/notification.svg";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <div className="notification-dot" />
        <img
          id="notifications-icon"
          alt="what you click on to get to the notifications page"
          src={notificationImage}
        />
      </div>
    );
  }
}
