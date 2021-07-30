import React from "react";
import {
  Overlay,
  Content,
  Title,
  Wrap,
  UserName,
  DescName,
  Avatar,
  Text,
  List,
  Item,
  Link,
  LogOut,
  Group,
  Close,
} from "./styles/MenuMobileStyles";

export default function MenuMobile({ children, ...restProps }) {
  return <MenuMobile {...restProps}>{children}</MenuMobile>;
}

MenuMobile.Overlay = function MenuMobileOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

MenuMobile.Content = function MenuMobileContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

MenuMobile.Wrap = function MenuMobileWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

MenuMobile.Close = function MenuMobileClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

MenuMobile.Title = function MenuMobileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MenuMobile.UserName = function MenuMobileUserName({ children, ...restProps }) {
  return <UserName {...restProps}>{children}</UserName>;
};

MenuMobile.DescName = function MenuMobileDescName({ children, ...restProps }) {
  return <DescName {...restProps}>{children}</DescName>;
};

MenuMobile.Text = function MenuMobileText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

MenuMobile.List = function MenuMobileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

MenuMobile.Item = function MenuMobileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

MenuMobile.Link = function MenuMobileLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

MenuMobile.LogOut = function MenuMobileLogOut({ children, ...restProps }) {
  return <LogOut {...restProps}>{children}</LogOut>;
};

MenuMobile.Avatar = function MenuMobileAvatar({ to, children, ...restProps }) {
  return (
    <Avatar to={to} {...restProps}>
      {children}
    </Avatar>
  );
};

MenuMobile.Group = function MenuMobileGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
