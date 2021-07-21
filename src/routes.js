import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./views/dashboard/intex";
import { Login } from "./views/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/test" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
