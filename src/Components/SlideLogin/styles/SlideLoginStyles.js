import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TitleMain, OverlayMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgRgba};
  border-radius: ${(props) => props.theme.radius};
  padding: 20px;
  height: 150px;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Title = styled(TitleMain)`
  span {
    color: ${(props) => props.theme.fcMain};
  }
`;

export const Wrap = styled.div`
  width: 80%;
`;

export const Link = styled(NavLink)`
  display: block;
`;
export const OverlayPlay = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${(props) => props.theme.radius};
  &:after {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${(props) => props.theme.mark};
    border-radius: ${(props) => props.theme.radius};
  }
  ${Link} {
    span {
      color: ${(props) => props.theme.bgWhite};
      z-index: 2;
      padding: 10px;
      border: ${(props) => props.theme.borderPrimary};
      border-radius: 50%;
      transition: ${(props) => props.theme.transitionAll};
      &:hover {
        opacity: 0.8;
        transform: scale(0.9);
        cursor: pointer;
      }
    }
  }
`;

export const NameCourse = styled.h2`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcMain};
  margin-bottom: 10px;
`;

export const StepCourse = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
  color: ${(props) => props.theme.fcMain};
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const TimeLine = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colorApp};
  span {
    color: ${(props) => props.theme.fcMain};
  }
`;
