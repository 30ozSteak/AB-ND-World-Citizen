import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";

ReactDOM.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
