import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  background-color: ${(props) => props.theme.bgWhite};
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 222;
  width: 100%;
  max-height: 800px;
  max-width: 630px;
  overflow: hidden;
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  display: block;
  &.active {
    display: block;
  }
`;

export const Container = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Icon = styled.span`
  display: flex;
  padding-right: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.fcSecond};
  font-size: ${(props) => props.theme.fsText};
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.colorApp};
  }
`;
