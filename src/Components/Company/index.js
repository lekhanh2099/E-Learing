import React from "react";
import {
  Overlay,
  Title,
  SubTitle,
  ImageLink,
  Image,
} from "./styles/CompamyStyles";

export default function Company({ children, ...restProps }) {
  return <Company {...restProps}>{children}</Company>;
}

Company.Overlay = function CompanyOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Company.Title = function CompanyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Company.SubTitle = function CompanySubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Company.ImageLink = function CompanyImageLink({ to, children, ...restProps }) {
  return (
    <ImageLink to={to} {...restProps}>
      {children}
    </ImageLink>
  );
};

Company.Image = function CompanyImage({ src, children, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
