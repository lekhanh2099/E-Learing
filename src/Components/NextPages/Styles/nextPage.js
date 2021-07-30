import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgSecondary};
  height: 100px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  margin-top: 90px;

  @media (max-width: 420px) {
    margin-top: 70px;
  }
`;

export const Group = styled.div``;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.fcMain};
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.fcMain};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const Text = styled(NavLink)`
  color: ${(props) => props.theme.fcMain};
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.fcMain};
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.fcTitle};
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.fcMain};
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
