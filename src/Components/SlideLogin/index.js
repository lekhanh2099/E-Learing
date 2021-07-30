import React from "react";
import {
  Overlay,
  OverlayPlay,
  NameCourse,
  StepCourse,
  TimeLine,
  Title,
  Wrap,
  Container,
  Link,
} from "./styles/SlideLoginStyles";

export default function SlideLogin({ children, ...restProps }) {
  return <SlideLogin {...restProps}>{children}</SlideLogin>;
}

SlideLogin.Overlay = function SlideLoginOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

SlideLogin.Container = function SlideLoginContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

SlideLogin.Title = function SlideLoginTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SlideLogin.Wrap = function SlideLoginWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

SlideLogin.Link = function SlideLoginLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

SlideLogin.OverlayPlay = function SlideLoginOverlayPlay({
  bg,
  children,
  ...restProps
}) {
  return (
    <OverlayPlay bg={bg} {...restProps}>
      {children}
    </OverlayPlay>
  );
};

SlideLogin.NameCourse = function SlideLoginNameCourse({
  children,
  ...restProps
}) {
  return <NameCourse {...restProps}>{children}</NameCourse>;
};

SlideLogin.StepCourse = function SlideLoginStepCourse({
  children,
  ...restProps
}) {
  return <StepCourse {...restProps}>{children}</StepCourse>;
};

SlideLogin.TimeLine = function SlideLoginTime({ children, ...restProps }) {
  return <TimeLine {...restProps}>{children}</TimeLine>;
};
