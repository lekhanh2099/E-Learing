import React from "react";
import {
  Overlay,
  Container,
  Title,
  SubTitle,
  Card,
  HeroBg,
  VideoBg,
  Name,
  SubName,
  Student,
  Group,
  CardContent,
  ButtonLink,
} from "./styles/TrendingStyles";

export default function Trending({ children, ...restProps }) {
  return <Trending {...restProps}>{children}</Trending>;
}

Trending.Overlay = function TrendingOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Trending.Container = function TrendingContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Trending.Title = function TrendingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Trending.SubTitle = function TrendingSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Trending.Group = function TrendingGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Trending.Card = function TrendingCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Trending.HeroBg = function TrendingHeroBg({ children, ...restProps }) {
  return <HeroBg {...restProps}>{children}</HeroBg>;
};

Trending.VideoBg = function TrendingVideoBg({ children, ...restProps }) {
  return <VideoBg {...restProps}>{children}</VideoBg>;
};

Trending.CardContent = function TrendingCardContent({
  children,
  ...restProps
}) {
  return <CardContent {...restProps}>{children}</CardContent>;
};

Trending.Name = function TrendingName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Trending.SubName = function TrendingSubName({ children, ...restProps }) {
  return <SubName {...restProps}>{children}</SubName>;
};

Trending.Student = function TrendingStudent({ children, ...restProps }) {
  return <Student {...restProps}>{children}</Student>;
};

Trending.ButtonLink = function TrendingButtonLink({
  to,
  children,
  ...restProps
}) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
