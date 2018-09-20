import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Play from "./Play";
import Login from "./Login";
import Social from "./Social";
import Info from "./Info";

export const PageContent = ({ loggedIn }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Login loggedIn={loggedIn} />} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Play" component={Play} />
        <Route exact path="/Social" component={Social} />
        <Route exact path="/Info" component={Info} />
      </Switch>
    </div>
  );
};
