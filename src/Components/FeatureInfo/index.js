import React from "react";
import {
  Container,
  Item,
  Header,
  Title,
  Money,
  MoneyContainer,
  MoneyRate,
  Sub,
} from "./Styles/FeatureInfo";

export default function FeatureInfo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
FeatureInfo.Header = function FeatureInfoHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

FeatureInfo.Item = function FeatureInfoItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

FeatureInfo.Title = function FeatureInfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FeatureInfo.Money = function FeatureInfoMoney({ children, ...restProps }) {
  return <Money {...restProps}>{children}</Money>;
};

FeatureInfo.MoneyContainer = function FeatureInfoMoneyContainer({
  children,
  ...restProps
}) {
  return <MoneyContainer {...restProps}>{children}</MoneyContainer>;
};

FeatureInfo.MoneyRate = function FeatureInfoMoneyRate({
  children,
  ...restProps
}) {
  return <MoneyRate {...restProps}>{children}</MoneyRate>;
};

FeatureInfo.Sub = function FeatureInfoSub({ children, ...restProps }) {
  return <Sub {...restProps}>{children}</Sub>;
};
