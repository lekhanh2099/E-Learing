import React from "react";
import {
  Container,
  Wrapper,
  Menu,
  Title,
  List,
  Item,
} from "./Styles/SideBarAdmin";

export default function SideBarAdmin({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
}

SideBarAdmin.Wrapper = function SideBarAdminWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

SideBarAdmin.Menu = function SideBarAdminMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

SideBarAdmin.Title = function SideBarAdminTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SideBarAdmin.List = function SideBarAdminList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

SideBarAdmin.Item = function SideBarAdminItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
