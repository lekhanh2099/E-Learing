import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { OverlayMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.bgFooter};
  @media (max-width: 480px) {
    background-image: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0 10px 0;
`;

export const Content = styled.div`
  width: 20%;
  margin-left: 24px;
  margin-right: 24px;
  padding-right: -24px;
  padding-left: -24px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  margin: 0 0 20px 0;
  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

export const SubTitle = styled.p`
  display: inline-block;
  padding-left: 20px;
  color: ${(props) => props.theme.fcMain};
  font-size: ${(props) => props.theme.fsText};
  margin-bottom: 0;
`;

export const SubTitleLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fcMain};
  font-size: ${(props) => props.theme.fsText};
  font-weight: normal;
  margin-bottom: 10px;
  transition: ${(props) => props.theme.transitionAll};
  &:last-of-type {
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.theme.colorApp};
  }
  svg,
  span {
    font-size: 3rem;
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }
`;

export const Image = styled.img`
  width: 120px;
`;
