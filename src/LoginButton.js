import React, { Component } from "react";
import { PageContent } from "./page-content";

import App from "./App";
import "./Login.css";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <div>
        <form>
          <button className="login-button" onClick={this.props.loggedIn}>
            Login
          </button>
          <button className="register-button">Register</button>
        </form>
      </div>
    );
  }
}
