import { Shell } from "@features/shell/Shell";
import * as React from "react";
import { render } from "react-dom";
import "regenerator-runtime/runtime";

export const App = () => {
  return <Shell />;
};

render(<App />, document.getElementById("root"));
