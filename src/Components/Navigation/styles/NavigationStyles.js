import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  margin-top: ${(props) => props.theme.height};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const Home = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
  padding-left: 10px;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.colorApp};
  }
  span {
    color: ${(props) => props.theme.colorApp};
  }
`;

export const NextPage = styled(NavLink)`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.colorApp};
  font-weight: normal;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.fcMain};
  }
`;
