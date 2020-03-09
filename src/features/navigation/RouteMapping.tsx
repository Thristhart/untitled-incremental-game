import { history } from "@features/navigation/history";
import { Home } from "@features/shell/Home";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Route, Switch } from "react-router";

export const RouteMapping = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};
