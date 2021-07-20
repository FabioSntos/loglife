import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
