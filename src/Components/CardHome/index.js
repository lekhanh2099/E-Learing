import React from "react";
import {
  Content,
  Image,
  Name,
  Desc,
  Text,
  Button,
  ButtonLink,
  Background,
  Group,
  ButtonMore,
} from "./styles/CardHomeStyle";

export default function CardHome({ children, ...restProps }) {
  return <CardHome {...restProps}>{children}</CardHome>;
}

CardHome.Content = function CardHomeContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

CardHome.Background = function CardHomeBackground({
  bg,
  children,
  ...restProps
}) {
  return (
    <Background bg={bg} {...restProps}>
      {children}
    </Background>
  );
};

CardHome.Image = function CardHomeImage({ src, children, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

CardHome.Name = function CardHomeName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

CardHome.Desc = function CardHomeDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

CardHome.Text = function CardHomeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

CardHome.Group = function CardHomeGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

CardHome.Button = function CardHomeButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

CardHome.ButtonLink = function CardHomeButtonLink({
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

CardHome.ButtonMore = function CardHomeButtonMore({
  to,
  children,
  ...restProps
}) {
  return (
    <ButtonMore to={to} {...restProps}>
      {children}
    </ButtonMore>
  );
};
