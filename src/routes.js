import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/test" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
