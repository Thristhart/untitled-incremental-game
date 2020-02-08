import { MineButton } from "@features/mine/MineButton";
import { history } from "@features/navigation/history";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Route, Switch } from "react-router";

export const RouteMapping = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/">
          <MineButton />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};
