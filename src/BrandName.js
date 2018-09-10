import React, { Component } from "react";
import "./icon.css";

export default class BrandName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="wc-name">
        <h1>World Citizen</h1>
      </div>
    );
  }
}
