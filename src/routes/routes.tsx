import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ClientProvider } from "../hooks/useClients";
import { Dashboard } from "../views/dashboard/intex";
import { Login } from "../views/Login";
import { NotFound } from "../views/notFound";
import PrivateRoutes from "./privateRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <ClientProvider>
          <PrivateRoutes path="/dashboard" exact component={Dashboard} />
        </ClientProvider>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
