import React from "react";
import {
  Overlay,
  Title,
  Label,
  Input,
  Error,
  Button,
  FormControl,
} from "./styles/InfoStyles";

export default function InfoUser({ children, ...restProps }) {
  return <InfoUser {...restProps}>{children}</InfoUser>;
}

InfoUser.Overlay = function InfoUserOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

InfoUser.Title = function InfoUserTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

InfoUser.FormControl = function InfoUserFormControl({
  children,
  ...restProps
}) {
  return <FormControl {...restProps}>{children}</FormControl>;
};

InfoUser.Label = function InfoUserLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

InfoUser.Input = function InfoUserInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

InfoUser.Error = function InfoUserError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

InfoUser.Button = function InfoUserButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
