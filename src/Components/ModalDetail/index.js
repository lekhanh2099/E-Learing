import React from "react";
import {
  Overlay,
  Header,
  Content,
  Footer,
  Title,
  Subtitle,
  Button,
} from "./styles/ModalDetailStyles";
export default function ModalDetail({ children, ...restProps }) {
  return <ModalDetail {...restProps}>{children}</ModalDetail>;
}

ModalDetail.Overlay = function ModalDetail({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

ModalDetail.Header = function ModalDetailHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

ModalDetail.Content = function ModalDetailContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

ModalDetail.Footer = function ModalDetailFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

ModalDetail.Title = function ModalDetailTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ModalDetail.Subtitle = function ModalDetailSubTitle({
  children,
  ...restProps
}) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

ModalDetail.Button = function ModalDetailButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
