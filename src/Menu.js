import React, { Component } from "react";

import MenuButton from "./MenuButton";
import homeImage from "./Images/home.svg";
import searchImage from "./Images/search.svg";
import nearbyImage from "./Images/nearby.svg";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <NavLink to="/">
          <MenuButton
            id="home-button"
            icon={homeImage}
            purpose={"home-button"}
          />
        </NavLink>
        <NavLink to="/Play">
          <MenuButton
            id="search-button"
            icon={searchImage}
            purpose={"search-button"}
          />
        </NavLink>
        <NavLink to="/Social">
          <MenuButton
            id="nearby-button"
            icon={nearbyImage}
            purpose={"nearby-button"}
          />
        </NavLink>
      </div>
    );
  }
}
