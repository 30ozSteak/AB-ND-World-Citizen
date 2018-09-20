import React, { Component } from "react";
import { PageContent } from "./page-content";

import App from "./App";

import LoginButton from "./LoginButton";
import { NavLink } from "react-router-dom";
import "./Login.css";
import Slider from "react-slick";
import SlickSlider from "./SlickSlider";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="welcome-screen">
        <SlickSlider />
        <form>
          <NavLink to="/Home">
            <LoginButton loggedIn={this.props.loggedIn} />
            {/* <LoginButton /> */}
          </NavLink>
        </form>
      </div>
    );
  }
}
