import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Play from "./Play";
import Login from "./Login";
import Social from "./Social";
import Info from "./Info";
import Purchase from "./Purchase";

export const PageContent = ({ loggedIn, citizenship, logPurchase }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Login loggedIn={loggedIn} />} />
        <Route exact path="/Home" render={() => <Home citizenship={citizenship} />} />
        <Route exact path="/Play" component={Play} />
        <Route exact path="/Purchase" render={() => <Purchase logPurchase={logPurchase}/>}  />
        <Route exact path="/Social" component={Social} />
        <Route exact path="/Info" component={Info} />
      </Switch>
    </div>
  );
};
