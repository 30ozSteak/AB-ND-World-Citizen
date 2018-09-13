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
        {/* <label className="🦄:" for="check">
          <input type="checkbox" id="check" />
          <div className="notification-popup"> */}
            {/* <h4>
              Hey, Come Check Us Out at Turing's Demo Night! -{" "}
              <span>Justine, Alex, Nick</span>
            </h4> */}
          </div>
          <img
            id="notifications-icon"
            alt="what you click on to get to the notifications page"
            src={notificationImage}
          />
        </label>
      </div>
    );
  }
}
