import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Admin from "./pages/Admin";

const App = () => (
  <>
  <Admin/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
