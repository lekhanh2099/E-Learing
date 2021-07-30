import React, { Fragment } from "react";
import { Route } from "react-router";
import FooterContainer from "../Containers/Footer";
import HeaderContainer from "../Containers/Header";

const LoginTemplate = (props) => {
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <HeaderContainer />
              <props.component {...propsRoute} />
              <FooterContainer />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
};

export default LoginTemplate;
