import React from "react";
import { Overlay, Title, Content, Button } from "./styles/WarningStyles";

export default function Warning({ children, ...restProps }) {
  return <Warning {...restProps}>{children}</Warning>;
}

Warning.Overlay = function WarningOverlay({ color, children, ...restProps }) {
  return (
    <Overlay color={color} {...restProps}>
      {children}
    </Overlay>
  );
};

Warning.Title = function WarningTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Warning.Content = function WarningContent({ color, children, ...restProps }) {
  return (
    <Content color={color} {...restProps}>
      {children}
    </Content>
  );
};

Warning.Button = function WarningButton({ color, children, ...restProps }) {
  return (
    <Button color={color} {...restProps}>
      {children}
    </Button>
  );
};
