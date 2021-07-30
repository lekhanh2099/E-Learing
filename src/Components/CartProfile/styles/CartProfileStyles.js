import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GroupMain } from "../../styles/main";

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: normal;
  color: ${(props) => props.theme.fcMain};
  margin: 20px 0;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  padding: 0 20px;
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const Wrapper = styled(GroupMain)`
  margin: auto 0;
  height: 100%;
  flex-direction: column;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  padding: 20px 20px;
  background-color: ${(props) => props.theme.bgRgba};
  border-radius: ${(props) => props.theme.radius};
  margin-bottom: 20px;
  &::before {
    position: absolute;
    content: "";
    width: 90%;
    height: 3px;
    border-radius: ${(props) => props.theme.radius};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.fcGray};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 140px;
  border-radius: ${(props) => props.theme.radius};
  @media (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 480px) {
    height: 80px;
  }
`;
export const Text = styled.span``;

export const Link = styled(NavLink)``;

export const Name = styled.p`
  font-size: 2rem;
  line-height: 2.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
  border-bottom: ${(props) => props.theme.border};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin-bottom: 5px;
  }
`;

export const Author = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
  line-height: 1.8;
  font-weight: normal;
  span {
    color: ${(props) => props.theme.colorApp};
    font-weight: bold;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0;
    margin-bottom: 5px;
  }
`;

export const Action = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.fcMain};
  line-height: 1.2;
  font-weight: normal;
  margin: 10px 0;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1;
    padding-bottom: 0;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1;
    padding-bottom: 0;
  }
`;

export const Date = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
  line-height: 1.4;
  font-weight: normal;
  span {
    color: ${(props) => props.theme.colorApp};
    font-weight: bold;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0;
    margin-bottom: 5px;
  }
`;
