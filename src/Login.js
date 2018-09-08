import React, { Component } from "react";
import { PageContent } from "./page-content";

import App from "./App";
import Icon from "./icon";
import LoginButton from "./LoginButton";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="welcome-screen">
        <Icon />
        <form>
          <input type="text" className="username" placeholder="Username" />
          <input type="password" className="password" placeholder="Password" />
          <LoginButton />
        </form>
      </div>
    );
  }
}

export default Login;
