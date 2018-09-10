import React, { Component } from "react";
import { PageContent } from "./page-content";

import App from "./App";
import Icon from "./Icon";
import "./Login.css";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <form>
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}
