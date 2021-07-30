import React from "react";
import { Overlay, ImageGif } from "./styles/LoadingPageStyles";

export default function LoadingPage({ children, ...restProps }) {
  return <LoadingPage {...restProps}>{children}</LoadingPage>;
}

LoadingPage.Overlay = function LoadingPageOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

LoadingPage.ImageGif = function LoadingPageImageGif({
  children,
  ...restProps
}) {
  return <ImageGif {...restProps}>{children}</ImageGif>;
};
