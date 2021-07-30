import React from "react";
import {
  Title,
  Content,
  Wrapper,
  Item,
  Img,
  Text,
  Link,
  Name,
  Author,
  Action,
  Date,
} from "./styles/CartProfileStyles";

export default function CartProfile({ children, ...restProps }) {
  return <CartProfile {...restProps}>{children}</CartProfile>;
}

CartProfile.Title = function CartProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

CartProfile.Content = function CartProfileContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

CartProfile.Wrapper = function CartProfileWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

CartProfile.Item = function CartProfileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

CartProfile.Text = function CartProfileText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

CartProfile.Link = function CartProfileLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

CartProfile.Img = function CartProfileImg({ src, ...restProps }) {
  return <Img src={src} {...restProps} />;
};

CartProfile.Name = function CartProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

CartProfile.Author = function CartProfileAuthor({ children, ...restProps }) {
  return <Author {...restProps}>{children}</Author>;
};

CartProfile.Action = function CartProfileAction({ children, ...restProps }) {
  return <Action {...restProps}>{children}</Action>;
};

CartProfile.Date = function CartProfileDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};
