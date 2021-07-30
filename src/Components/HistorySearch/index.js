import React from "react";
import {
  Overlay,
  Container,
  List,
  Item,
  Icon,
  Link,
} from "./styles/HistorySearchStyles";

export default function HistorySearch({ children, ...restProps }) {
  return <HistorySearch {...restProps}>{children}</HistorySearch>;
}

HistorySearch.Overlay = function HistorySearchOverlay({
  children,
  ...restProps
}) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

HistorySearch.Container = function HistorySearchContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

HistorySearch.List = function HistorySearchList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

HistorySearch.Item = function HistorySearchItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

HistorySearch.Icon = function HistorySearchIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

HistorySearch.Link = function HistorySearchLink({
  to,
  children,
  ...restProps
}) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
