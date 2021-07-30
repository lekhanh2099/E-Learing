import React from "react";
import { LoadingPage } from "../Components";

export default function LoadingContainer() {
  return (
    <LoadingPage.Overlay>
      <LoadingPage.ImageGif></LoadingPage.ImageGif>
    </LoadingPage.Overlay>
  );
}
