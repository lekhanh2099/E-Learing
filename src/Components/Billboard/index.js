import React from "react";
import {
  Container,
  Content,
  Group,
  Image,
  LearnMoreLink,
  Overlay,
  SubTitle,
  Title,
} from "./styles/BillboardStyle";

export default function Billboard({ children, ...restProps }) {
  return <Billboard {...restProps}>{children}</Billboard>;
}

Billboard.Overlay = function BillboardOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Billboard.Group = function BillboardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Billboard.Container = function BillboardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Billboard.Content = function BillboardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Billboard.Title = function BillboardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Billboard.SubTitle = function BillboardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Billboard.LearnMoreLink = function BillboardLearnMoreLink({
  to,
  children,
  ...restProps
}) {
  return (
    <LearnMoreLink to={to} {...restProps}>
      {children}
    </LearnMoreLink>
  );
};

Billboard.Image = function BillboardImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
