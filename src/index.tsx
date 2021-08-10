import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";

import { Router } from "./routes/routes";

import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
