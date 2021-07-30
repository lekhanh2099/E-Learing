import React from "react";
import {
  Container,
  Title,
  Text,
  Link,
  Group,
  TextContent,
} from "./Styles/nextPage";

export default function NextPages({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NextPages.Group = function NextPagesGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

NextPages.Title = function NextPagesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

NextPages.TextContent = function NextPagesTextContent({
  children,
  ...restProps
}) {
  return <TextContent {...restProps}>{children}</TextContent>;
};

NextPages.Text = function NextPagesText({ to, children, ...restProps }) {
  return (
    <Text {...restProps} to={to}>
      {children}
    </Text>
  );
};

NextPages.Link = function NextPagesLink({ to, children, ...restProps }) {
  return (
    <Link {...restProps} to={to}>
      {children}
    </Link>
  );
};
