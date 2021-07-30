import styled from "styled-components";
import { ButtonLinkMain } from "../../styles/main";

export const Overlay = styled.div`
  z-index: 9;
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ color }) => {
    if (color === "danger") {
      return (props) => props.theme.colorDanger;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => {
    if (color === "danger") {
      return (props) => props.theme.colorDanger;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  span {
    color: ${({ color }) => {
      if (color === "danger") {
        return (props) => props.theme.colorDanger;
      } else {
        return (props) => props.theme.colorApp;
      }
    }};
    font-size: 4rem;
  }
`;

export const Button = styled(ButtonLinkMain)`
  display: block;
  width: 100%;
  justify-content: center;
  color: ${({ color }) => {
    if (color === "danger") {
      return (props) => props.theme.colorDanger;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  border: 1px solid
    ${({ color }) => {
      if (color === "danger") {
        return (props) => props.theme.colorDanger;
      } else {
        return (props) => props.theme.colorApp;
      }
    }};
`;
