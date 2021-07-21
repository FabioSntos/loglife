import React from "react";
import ReactDOM from "react-dom";

import { Router } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
