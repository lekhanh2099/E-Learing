import React from "react";
import {
  Container,
  ButtonHeader,
  ButtonGroup,
  Wrapper,
  Header,
  Title,
  Edit,
  Register,
  Delete,
  Search,
  InputSearch,
} from "./Styles/UserManager";

export default function UserManagerGroup({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UserManagerGroup.Header = function UserManagerGroupHeader({
  children,
  ...restProps
}) {
  return <Header {...restProps}>{children}</Header>;
};

UserManagerGroup.Title = function UserManagerGroupTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

UserManagerGroup.Wrapper = function UserManagerGroupWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

UserManagerGroup.ButtonGroup = function UserManagerGroupButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

UserManagerGroup.ButtonHeader = function UserManagerGroupButtonHeader({
  children,
  ...restProps
}) {
  return <ButtonHeader {...restProps}>{children}</ButtonHeader>;
};

UserManagerGroup.Edit = function UserManagerGroupEdit({
  children,
  to,
  ...restProps
}) {
  return (
    <Edit {...restProps} to={to}>
      {children}
    </Edit>
  );
};

UserManagerGroup.Register = function UserManagerGroupRegister({
  children,
  ...restProps
}) {
  return <Register {...restProps}>{children}</Register>;
};

UserManagerGroup.Delete = function UserManagerGroupDelete({
  children,
  ...restProps
}) {
  return <Delete {...restProps}>{children}</Delete>;
};

UserManagerGroup.Search = function UserManagerGroupSearch({
  children,
  to,
  ...restProps
}) {
  return (
    <Search {...restProps} to={to}>
      {children}
    </Search>
  );
};

UserManagerGroup.InputSearch = function UserManagerGroupInputSearch({
  children,
  ...restProps
}) {
  return <InputSearch {...restProps}>{children}</InputSearch>;
};
