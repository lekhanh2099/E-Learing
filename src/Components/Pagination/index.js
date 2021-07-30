import React from "react";
import { Overlay } from "./styles/PaginationStyles";

export default function PaginationPage({ children, ...restProps }) {
  return <PaginationPage {...restProps}>{children}</PaginationPage>;
}

PaginationPage.Overlay = function PaginationPageOverlay({
  children,
  ...restProps
}) {
  return <Overlay {...restProps}>{children}</Overlay>;
};
