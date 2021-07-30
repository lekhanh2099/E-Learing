import React from "react";
import { Overlay, Content, Title, Desc } from "./styles/CoursesHomeStyle";

export default function CoursesHome({ children, ...restProps }) {
  return <CoursesHome {...restProps}>{children}</CoursesHome>;
}

CoursesHome.Overlay = function CoursesHomeOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

CoursesHome.Title = function CoursesHomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

CoursesHome.Desc = function CoursesHomeDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

CoursesHome.Content = function CoursesHomeContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
