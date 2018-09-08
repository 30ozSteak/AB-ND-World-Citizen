import React, { Component } from "react";
import "./icon.css";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <div className="spinning-globe" />
        <h1>World Citizen</h1>
      </div>
    );
  }
}

export default Icon;
