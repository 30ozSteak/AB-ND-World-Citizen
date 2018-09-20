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
      <div class="pop-up">
        <p> Hey! Come check us out at Turing's Demo Night! </p>
      </div>
    );
  }
}
