import styled from "styled-components";
import loadingGif from "../../../Assets/loading-pages.gif";

export const Overlay = styled.div`
  z-index: 999999;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 152, 0, 1) 100%
  );
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ImageGif = styled.div`
  background-image: url(${loadingGif});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  z-index: 99999;
`;
