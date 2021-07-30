import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ButtonLinkMain,
  GroupMain,
  OverlayMain,
  SubTitleMain,
  TitleMain,
} from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgSecondary};
  padding: 10px 0;
`;

export const Content = styled.div`
  padding-bottom: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: ${(props) => props.theme.radius};
  margin-bottom: 20px;
`;

export const Mark = styled.div`
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.mark};
    border-radius: ${(props) => props.theme.radius};
    z-index: 111;
  }
`;

export const Card = styled.div``;

export const Wrapper = styled(GroupMain)`
  border-radius: ${(props) => props.theme.radius};
  &.mark {
    position: relative;
  }
  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Name = styled(TitleMain)`
  border: none;
  padding: 0;
`;

export const Desc = styled(SubTitleMain)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0;
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
  margin: 10px 0;
  margin-right: 10px;
  line-height: 2;
  font-weight: bold;
  span {
    padding-right: 10px;
  }
`;

export const Meta = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fsText};
  color: #fff;
  margin: 10px 0;
  margin-right: 10px;
  line-height: 2;
  span {
    padding-right: 10px;
  }
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  margin: 10px 0;
  margin-right: 10px;
  span {
    font-size: ${(props) => props.theme.fsText};
  }
`;

export const Author = styled(NavLink)`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.colorApp};
  text-transform: capitalize;
  margin-left: 10px;
`;

export const Button = styled(ButtonLinkMain)`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 10px;
  &:first-of-type {
    margin-right: 20px;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    &:first-of-type {
      margin-right: 0;
    }
  }
`;

export const Section = styled(Overlay)`
  background-color: ${(props) => props.theme.bgSecondary};
  padding: 30px 0;
`;
export const Box = styled(Content)`
  background-color: ${(props) => props.theme.bgPrimary};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};
  padding: 10px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ul {
    list-style: circle;
    margin-left: 20px;
  }
`;

export const List = styled.ul`
  list-style: circle;
  margin-left: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcSubTitle};
  font-style: italic;
  margin: 10px 0;
  span {
    font-size: 1rem;
    padding-right: 20px;
  }
`;

export const Title = styled(TitleMain)`
  margin: 10px 0;
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  border: none;
`;

export const SubTitle = styled(SubTitleMain)`
  color: ${(props) => props.theme.fcSubTitle};
  font-weight: normal;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 10px;
    color: ${(props) => props.theme.colorApp};
  }
  span {
    margin-right: 10px;
    color: ${(props) => props.theme.colorDanger};
  }
`;
