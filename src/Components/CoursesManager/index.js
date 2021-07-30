import React from "react";
import {
  Container,
  Header,
  ButtonGroup,
  Edit,
  Register,
  Delete,
  Search,
  InputSearch,
  Link,
} from "./Styles/CoursesManager";

export default function CoursesManager({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CoursesManager.Header = function CoursesManagerHeader({
  children,
  ...restProps
}) {
  return <Header {...restProps}>{children}</Header>;
};

CoursesManager.ButtonGroup = function CoursesManagerButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

CoursesManager.Edit = function CoursesManagerEdit({
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

CoursesManager.Register = function CoursesManagerRegister({
  children,
  to,
  ...restProps
}) {
  return (
    <Register {...restProps} to={to}>
      {children}
    </Register>
  );
};

CoursesManager.Delete = function CoursesManagerDelete({
  children,
  to,
  ...restProps
}) {
  return (
    <Delete {...restProps} to={to}>
      {children}
    </Delete>
  );
};

CoursesManager.Search = function CoursesManagerSearch({
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

CoursesManager.InputSearch = function CoursesManagerInputSearch({
  children,
  ...restProps
}) {
  return <InputSearch {...restProps}>{children}</InputSearch>;
};

CoursesManager.Link = function CoursesManagerLink({
  children,
  to,
  ...restProps
}) {
  return (
    <Link {...restProps} to={to}>
      {children}
    </Link>
  );
};
