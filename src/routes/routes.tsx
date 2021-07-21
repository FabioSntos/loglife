import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "../views/dashboard/intex";
import { Login } from "../views/Login";
import { NotFound } from "../views/notFound";
import PrivateRoutes from "./privateRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
