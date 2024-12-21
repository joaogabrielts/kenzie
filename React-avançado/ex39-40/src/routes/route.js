
import { useSelector } from "react-redux";
import { Navigate, Route as ReactRouterRoute } from "react-router-dom";

const CustomRoute = ({ isPrivate = false, element: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);

  return (
    <ReactRouterRoute
      {...rest}
      element={
        isPrivate === !!token ? (
          Component
        ) : (
          <Navigate to={isPrivate ? "/login" : "/dashboard"} />
        )
      }
    />
  );
};

export default CustomRoute;


/*

import { useSelector } from "react-redux";
import { Redirect, Route as ReactDomRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;*/
