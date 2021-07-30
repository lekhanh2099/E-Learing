import React from "react";
import {
  Overlay,
  Section,
  Wrapper,
  Content,
  Mark,
  Image,
  Card,
  Name,
  Desc,
  Rating,
  Text,
  Meta,
  Button,
  Author,
  Title,
  SubTitle,
  Box,
  List,
  Item,
} from "./styles/DetailStyles";

export default function Detail({ children, ...restProps }) {
  return <Detail {...restProps}>{children}</Detail>;
}

Detail.Overlay = function DetailOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Detail.Wrapper = function DetailWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Detail.Content = function DetailContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Detail.Card = function DetailCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Detail.Mark = function DetailMark({ children, ...restProps }) {
  return <Mark {...restProps}>{children}</Mark>;
};

Detail.Image = function DetailImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Detail.Name = function DetailName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Detail.Desc = function DetailDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Detail.Rating = function DetailRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>;
};

Detail.Text = function DetailText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Detail.Meta = function DetailMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Detail.Author = function DetailAuthor({ to, children, ...restProps }) {
  return (
    <Author to={to} {...restProps}>
      {children}
    </Author>
  );
};

Detail.Button = function DetailButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};

Detail.Section = function DetailSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Detail.Title = function DetailTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Detail.SubTitle = function DetailSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Detail.Box = function DetailBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Detail.List = function DetailList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Detail.Item = function DetailItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
