import React from "react";
import {
  Container,
  Overlay,
  Form,
  Title,
  Header,
  GroupInput,
  GroupSelect,
  ButtonUpload,
} from "./Styles/EditUser";

export default function EditUserGroup({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditUserGroup.Overlay = function EditUserGroupOverlay({
  children,
  ...restProps
}) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

EditUserGroup.Form = function EditUserGroupForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

EditUserGroup.Title = function EditUserGroupTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EditUserGroup.Header = function EditUserGroupHeader({
  children,
  ...restProps
}) {
  return <Header {...restProps}>{children}</Header>;
};

EditUserGroup.GroupInput = function EditUserGroupGroupInput({
  children,
  ...restProps
}) {
  return <GroupInput {...restProps}>{children}</GroupInput>;
};

EditUserGroup.GroupSelect = function EditUserGroupGroupSelect({
  children,
  ...restProps
}) {
  return <GroupSelect {...restProps}>{children}</GroupSelect>;
};

EditUserGroup.ButtonUpload = function EditUserGroupButtonUpload({
  children,
  ...restProps
}) {
  return <ButtonUpload {...restProps}>{children}</ButtonUpload>;
};
