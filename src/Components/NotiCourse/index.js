import React from "react";
import {
  Overlay,
  Title,
  Success,
  Warning,
  Error,
  Content,
  Button,
} from "./styles/NotiCourseStyles";

export default function NotiCourse({ children, ...restProps }) {
  return <NotiCourse {...restProps}>{children}</NotiCourse>;
}

NotiCourse.Overlay = function NotiCouresOverlay({
  color,
  children,
  ...restProps
}) {
  return (
    <Overlay color={color} {...restProps}>
      {children}
    </Overlay>
  );
};

NotiCourse.Title = function NotiCouresTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

NotiCourse.Success = function NotiCouresSuccess({ children, ...restProps }) {
  return <Success {...restProps}>{children}</Success>;
};

NotiCourse.Warning = function NotiCouresWarning({ children, ...restProps }) {
  return <Warning {...restProps}>{children}</Warning>;
};

NotiCourse.Error = function NotiCouresError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

NotiCourse.Content = function NotiCouresContent({
  color,
  children,
  ...restProps
}) {
  return (
    <Content color={color} {...restProps}>
      {children}
    </Content>
  );
};

NotiCourse.Button = function NotiCouresButton({
  color,
  children,
  ...restProps
}) {
  return (
    <Button color={color} {...restProps}>
      {children}
    </Button>
  );
};
