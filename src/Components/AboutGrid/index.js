import React from "react";
import {
  Container,
  GroupContent,
  Content,
  Title,
  Description,
  Button,
  GroupImage,
  Wrap,
  Image,
} from "./Styles/AboutGrid";

export default function AboutGrid({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AboutGrid.GroupContent = function AboutGridGroupContent({
  children,
  ...restProps
}) {
  return <GroupContent {...restProps}>{children}</GroupContent>;
};

AboutGrid.Content = function AboutGridContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

AboutGrid.Title = function AboutGridTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AboutGrid.Description = function AboutGridDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

AboutGrid.Button = function AboutGridButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};

AboutGrid.GroupImage = function AboutGridGroupImage({
  children,
  ...restProps
}) {
  return <GroupImage {...restProps}>{children}</GroupImage>;
};

AboutGrid.Wrap = function AboutGridGroupWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

AboutGrid.Image = function AboutGridImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
