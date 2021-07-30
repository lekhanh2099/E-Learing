import React from "react";
import {
  Container,
  Box,
  ButtonHeader,
  ButtonGroup,
  Wrapper,
  Header,
  Title,
  SubTitle,
  Edit,
  Register,
  Delete,
  Search,
  InputSearch,
  ImageThumbnail,
  ImageCell,
} from "./styles/ManagerStyles";

export default function Manager({ children, ...restProps }) {
  return <Manager {...restProps}>{children}</Manager>;
}

Manager.Container = function ManagerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Manager.Box = function ManagerBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Manager.Header = function ManagerHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Manager.Title = function ManagerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Manager.SubTitle = function ManagerSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Manager.Wrapper = function ManagerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Manager.ButtonGroup = function ManagerButtonGroup({ children, ...restProps }) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

Manager.ButtonHeader = function ManagerButtonHeader({
  children,
  to,
  ...restProps
}) {
  return (
    <ButtonHeader {...restProps} to={to}>
      {children}
    </ButtonHeader>
  );
};

Manager.Edit = function ManagerEdit({ children, to, ...restProps }) {
  return (
    <Edit {...restProps} to={to}>
      {children}
    </Edit>
  );
};

Manager.Register = function ManagerRegister({ children, ...restProps }) {
  return <Register {...restProps}>{children}</Register>;
};

Manager.Delete = function ManagerDelete({ children, ...restProps }) {
  return <Delete {...restProps}>{children}</Delete>;
};

Manager.Search = function ManagerSearch({ children, to, ...restProps }) {
  return (
    <Search {...restProps} to={to}>
      {children}
    </Search>
  );
};

Manager.InputSearch = function ManagerInputSearch({ children, ...restProps }) {
  return <InputSearch {...restProps}>{children}</InputSearch>;
};

Manager.ImageCell = function ManagerImageCell({ children, ...restProps }) {
  return <ImageCell {...restProps}>{children}</ImageCell>;
};

Manager.ImageThumbnail = function ManagerImageThumbnailh({
  src,
  children,
  ...restProps
}) {
  return <ImageThumbnail src={src} {...restProps} />;
};
