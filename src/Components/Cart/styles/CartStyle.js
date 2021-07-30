import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonLinkMain, GroupMain } from "../../styles/main";

export const Item = styled.li`
  padding: 20px 10px;
  border-bottom: ${(props) => props.theme.border};
  &:last-of-type {
    border: none;
  }
`;

export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: ${(props) => props.theme.radius};
  margin-right: 20px;
`;

export const ImageNoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${(props) => props.theme.radius};
  margin-right: 20px;
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsSubTitle};
  font-weight: bold;
  padding-bottom: 30px;
  .material-icons {
    font-size: 7rem;
    text-align: center;
    margin: 20px 0;
    color: ${(props) => props.theme.fcGray};
  }
`;

export const Wrapper = styled(GroupMain)``;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fsSubTitle};
  font-weight: bold;
  margin: 0 0 5px 0;
  color: ${(props) => props.theme.fcMain};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const Desc = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const List = styled.ul`
  position: absolute;
  top: 75px;
  left: -200px;
  z-index: 4;
  min-width: 400px;
  overflow-y: auto;
  min-height: 200px;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: ${(props) => props.theme.radius};
  border: ${(props) => props.theme.border};
  cursor: default;
  padding: 10px 0;
  box-shadow: ${(props) => props.theme.shadow};
  animation: headerNotifyGrowth 0.4s ease-in-out;
  transform-origin: center top;
  transform-style: flat;
  display: none;

  @media (max-width: 480px) {
    top: 60px;
    left: -210px;
    z-index: 4;
    min-width: 300px;
    transform-origin: right top;
    transform-style: flat;
  }

  // Animation

  @keyframes headerNotifyGrowth {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Button = styled(ButtonLinkMain)``;
