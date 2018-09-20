import React, { Component } from "react";
import "./icon.css";
import "./Popup.css";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="pop-up-container">
        <div className="pop-up">
          <p> ❗Come check us out at Turing's Demo Night! 9/20</p>
          <p class="recent-unlock">
            ❗You've Unlocked: Local Citizenship for your purchase at Warby
            Parker. Nice job!
          </p>
        </div>
      </div>
    );
  }
}
