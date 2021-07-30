import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TitleMain, OverlayMain, SubTitleMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgSecondary};
`;

export const Title = styled(TitleMain)``;
export const SubTitle = styled(SubTitleMain)``;

export const Topics = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 10px 20px;
  margin-right: 20px;
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsText};
  font-weight: bold;
  border: 1px solid ${(props) => props.color};
  border-radius: ${(props) => props.theme.radius};
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.fcMain};
  }
`;
