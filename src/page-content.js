import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Play from "./Play";
import Social from "./Social";

export const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Login" component={Login} /> */}
        <Route exact path="/Play" component={Play} />
        <Route exact path="/Social" component={Social} />
      </Switch>
    </div>
  );
};
