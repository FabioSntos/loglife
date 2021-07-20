import React from "react";
import ReactDOM from "react-dom";

import { Router } from "./routes";
import { GlobalStyles } from "./styls/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
