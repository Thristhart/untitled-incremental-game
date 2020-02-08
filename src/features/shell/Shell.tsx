import { RouteMapping } from "@features/navigation/RouteMapping";
import { store } from "@store/bootstrap";
import * as React from "react";
import { Provider } from "react-redux";

export const Shell = () => {
  return (
    <Provider store={store}>
      <RouteMapping />
    </Provider>
  );
};
