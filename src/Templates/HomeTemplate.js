import { Route } from "react-router-dom";

import React, { Fragment } from "react";

export default function HomeTemplate(props) {
  return (
    <Fragment>
      {/* <Header />
      <Route path={path} exact component={component} /> */}
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              {/* Header here */}
              <props.component {...propsRoute} />
              {/* Footer here */}
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
