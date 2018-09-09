import React, { Component } from "react";
import "./icon.css";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <div className="spinning-globe" />
        <p>Shop from Socially Conscious Companies</p>
      </div>
    );
  }
}
