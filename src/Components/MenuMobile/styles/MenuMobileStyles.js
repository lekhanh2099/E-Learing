import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { GroupMain, TitleMain } from "../../styles/main";

const open = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const Overlay = styled.button`
  position: fixed;
  display: block;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: visible;
  text-align: left;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.mark};
  z-index: 22;
`;

export const Content = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 70%;
  background-color: ${(props) => props.theme.bgPrimary};
  z-index: 24;
  animation: ${open} 0.2s ease-in-out;
`;

export const Title = styled(TitleMain)`
  border: none;
  font-size: 2rem;
  margin-bottom: 0;
  @media (max-width: 480px) {
    border: none;
    border-radius: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export const Wrap = styled.div`
  padding: 10px;
  border-bottom: ${(props) => props.theme.border};
  &:last-of-type {
    border: none;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: -60px;
  border: none;
  border-radius: none;
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 10px;
  border: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.fcGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  z-index: 99999;
  span {
    color: ${(props) => props.theme.fcGray};
  }
`;

export const UserName = styled.h2`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  padding: 5px 0;
  text-transform: capitalize;
`;

export const DescName = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
`;

export const Avatar = styled(NavLink)`
  padding: 10px;
  @media (max-width: 480px) {
    div {
      width: 60px;
      height: 60px;
    }
  }
`;
export const Text = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.fcMain};
  padding: 10px;
`;

export const List = styled.ul`
  margin: 0;
`;

export const Item = styled.li`
  padding: 0;
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: 16px;
  color: ${(props) => props.theme.fcMain};
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const LogOut = styled.p`
  display: block;
  font-size: 10px;
  text-align: right;
  margin-top: 10px;
  color: ${(props) => props.theme.fcGray};
`;

export const Group = styled(GroupMain)``;
