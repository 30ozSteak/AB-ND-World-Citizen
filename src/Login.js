import React, { Component } from "react";
import App from "./App";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="welcome-screen">
        <form>
          <input type="text" className="username" placeholder="Username" />
          <input type="password" className="password" placeholder="Password" />
        </form>
        <p>Forgot Your Login?</p>
      </div>
    );
  }
}

export default Login;
