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
    }
    if (color === "success") {
      return (props) => props.theme.colorSuccess;
    }
    if (color === "warning") {
      return (props) => props.theme.colorWarning;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const Success = styled.h2``;

export const Warning = styled.h2``;

export const Error = styled.h2``;

export const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => {
    if (color === "danger") {
      return (props) => props.theme.colorDanger;
    }
    if (color === "success") {
      return (props) => props.theme.colorSuccess;
    }
    if (color === "warning") {
      return (props) => props.theme.colorWarning;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  span {
    color: ${({ color }) => {
      if (color === "danger") {
        return (props) => props.theme.colorDanger;
      }
      if (color === "success") {
        return (props) => props.theme.colorSuccess;
      }
      if (color === "warning") {
        return (props) => props.theme.colorWarning;
      } else {
        return (props) => props.theme.colorApp;
      }
    }};
    font-size: 4rem;
    margin: 0;
    padding: 0;
  }
`;

export const Button = styled(ButtonLinkMain)`
  display: block;
  width: 100%;
  justify-content: center;
  color: ${({ color }) => {
    if (color === "danger") {
      return (props) => props.theme.colorDanger;
    }
    if (color === "success") {
      return (props) => props.theme.colorSuccess;
    }
    if (color === "warning") {
      return (props) => props.theme.colorWarning;
    } else {
      return (props) => props.theme.colorApp;
    }
  }};
  border: 1px solid
    ${({ color }) => {
      if (color === "danger") {
        return (props) => props.theme.colorDanger;
      }
      if (color === "success") {
        return (props) => props.theme.colorSuccess;
      }
      if (color === "warning") {
        return (props) => props.theme.colorWarning;
      } else {
        return (props) => props.theme.colorApp;
      }
    }};
  &:hover {
    background-color: ${({ color }) => {
      if (color === "danger") {
        return (props) => props.theme.colorDanger;
      }
      if (color === "success") {
        return (props) => props.theme.colorSuccess;
      }
      if (color === "warning") {
        return (props) => props.theme.colorWarning;
      } else {
        return (props) => props.theme.colorApp;
      }
    }};
  }
`;
