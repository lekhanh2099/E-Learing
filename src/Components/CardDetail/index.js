import React from "react";
import {
  Overlay,
  Content,
  Image,
  Price,
  Text,
  TextSub,
  Icon,
  Discount,
  Button,
  Link,
} from "./styles/CardDetailStyles";

export default function CardDetail({ children, ...restProps }) {
  return <CardDetail {...restProps}>{children}</CardDetail>;
}

CardDetail.Overlay = function CardDetailOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

CardDetail.Content = function CardDetail({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

CardDetail.Image = function CardDetailImage({ src, children, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

CardDetail.Price = function CardDetailPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

CardDetail.Text = function CardDetailText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

CardDetail.TextSub = function CardDetailTextSub({ children, ...restProps }) {
  return <TextSub {...restProps}>{children}</TextSub>;
};

CardDetail.Icon = function CardDetailIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

CardDetail.Discount = function CardDetailDiscount({ children, ...restProps }) {
  return <Discount {...restProps}>{children}</Discount>;
};

CardDetail.Button = function CardDetailButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

CardDetail.Link = function CardDetailLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
