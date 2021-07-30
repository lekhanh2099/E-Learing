import React from "react";
import { Overlay, Title, SubTitle, Topics } from "./styles/RecommedStyles";

export default function Recommend({ children, ...restProps }) {
  return <Recommend {...restProps}>{children}</Recommend>;
}

Recommend.Overlay = function RecommendOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Recommend.Title = function RecommendTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Recommend.SubTitle = function RecommendSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Recommend.Topics = function RecommendTopics({ to, children, ...restProps }) {
  return (
    <Topics to={to} {...restProps}>
      {children}
    </Topics>
  );
};
