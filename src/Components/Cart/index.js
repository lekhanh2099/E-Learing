import React from "react";
import {
  Item,
  List,
  Wrapper,
  Link,
  Image,
  ImageNoCart,
  Name,
  Desc,
  Button,
} from "./styles/CartStyle";

export default function Cart({ children, ...restProps }) {
  return <Cart {...restProps}>{children}</Cart>;
}

Cart.List = function CartList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Cart.Item = function CartItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Cart.Wrapper = function CartWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Cart.Link = function CartLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Cart.Image = function CartImage({ src, children, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
Cart.ImageNoCart = function CartImageNoCart({ bg, children, ...restProps }) {
  return (
    <ImageNoCart bg={bg} {...restProps}>
      {children}
    </ImageNoCart>
  );
};

Cart.Name = function CartName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Cart.Desc = function CartDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Cart.Button = function CartButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};
