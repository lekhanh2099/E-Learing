import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgBanner from "../../../Assets/Images/bg-banner-2.png";
import { GroupMain } from "../../styles/main";

export const Overlay = styled.div`
  position: relative;
  background-color: rgba(47,48,58,1);
  background-image: url(${bgBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${(props) => props.theme.shadow};
  &:after {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.mark};
  }
`;

export const Container = styled.div`
  position: relative;
  margin-top: ${(props) => props.theme.height};
  padding: 100px 0;
  display: flex;
  z-index: 20;
  @media (max-width: 480px) {
    padding: 20px 0;
    margin-top: ${(props) => props.theme.heightMobile};
  }
`;

export const Content = styled.div`
  background-color: rgba(167,99,0,0.4);
  padding: 20px 40px;
  border-radius: ${(props) => props.theme.radius};
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  letter-spacing: 2px;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 20px 0;
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcMain};
  font-weight: normal;
  letter-spacing: 2px;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const LearnMoreLink = styled(NavLink)`
  display: inline-block;
  background-color: ${(props) => props.theme.fcMain};
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: ${(props) => props.theme.radius};
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fsSubTitle};
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    transform: translateY(-1px);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  user-select: none;
`;

export const Group = styled(GroupMain)``;
