import React from "react";
import {
  Wrap,
  Image,
  Content,
  Meta,
  GroupMeta,
  Description,
  Rating,
  Button,
  ButtonMore,
} from "./Styles/Card";

export default function Card({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
}

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.GroupMeta = function CardGroupMeta({ children, ...restProps }) {
  return <GroupMeta {...restProps}>{children}</GroupMeta>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Rating = function CardRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>;
};

Card.Button = function CardButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};

Card.ButtonMore = function CardButtonMore({ to, children, ...restProps }) {
  return (
    <ButtonMore to={to} {...restProps}>
      {children}
    </ButtonMore>
  );
};
