import React, { Component } from "react";
import Menu from "./Menu";
import Play from "./Play";
import "./App.css";

export default class Social extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}
