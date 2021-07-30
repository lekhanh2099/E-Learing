import React from "react";
import {
  Overlay,
  Content,
  Name,
  Wrapper,
  Input,
  Title,
} from "./styles/SearchUserStyles";

export default function SearchUser({ children, ...restProps }) {
  return <SearchUser {...restProps}>{children}</SearchUser>;
}

SearchUser.Overlay = function SearchUserOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

SearchUser.Wrapper = function SearchUserWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

SearchUser.Name = function SearchUserName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

SearchUser.Input = function SearchUserInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SearchUser.Content = function SearchUserContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

SearchUser.Title = function SearchUserTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
