import { Route, Redirect } from "react-router-dom";

const PrivateRoutes: any = ({
  component: Component,
  path: Path,
  ...rest
}: any) => {
  const isLogin: string | null = localStorage.getItem("@RefreshToken");
  const isSectionActive: any = () => {
    if (isLogin === null) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isSectionActive() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoutes;
