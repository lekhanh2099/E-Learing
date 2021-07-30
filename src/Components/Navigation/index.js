import React from "react";
import { Overlay, Header, Home, NextPage } from "./styles/NavigationStyles";

export default function Navigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
}

Navigation.Overlay = function NavigationOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Navigation.Header = function NavigationHeader({ to, children, ...restProps }) {
  return (
    <Header to={to} {...restProps}>
      {children}
    </Header>
  );
};

Navigation.Home = function NavigationHome({ to, children, ...restProps }) {
  return (
    <Home to={to} {...restProps}>
      {children}
      <span className="material-icons">navigate_next</span>
    </Home>
  );
};

Navigation.NextPage = function NavigationNextPage({
  to,
  children,
  ...restProps
}) {
  return (
    <NextPage to={to} {...restProps}>
      {children}
    </NextPage>
  );
};
