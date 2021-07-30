import React from "react";
import {
  Overlay,
  Container,
  Content,
  Title,
  SubTitle,
  SubTitleLink,
  Image,
} from "./styles/FooterStyles";

export default function Footer({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
}

Footer.Overlay = function FooterOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Content = function FooterContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.SubTitle = function FooterSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Footer.SubTitleLink = function FooterSubTitleLink({
  to,
  children,
  ...restProps
}) {
  return (
    <SubTitleLink to={to} {...restProps}>
      {children}
    </SubTitleLink>
  );
};

Footer.Image = function FooterImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
