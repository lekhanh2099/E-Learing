import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleMain = styled.h1`
  display: inline-block;
  font-size: ${(props) => props.theme.fsTitle};
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-bottom: 4px solid ${(props) => props.theme.colorApp};
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubTitleMain = styled.h2`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcSubTitle};
  line-height: 2;
  font-weight: normal;
  margin-bottom: 20px;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const OverlayMain = styled.div`
  position: relative;
  padding: 50px 0;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const ButtonLinkMain = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.fcWhite};
  padding: 10px 15px;
  margin-top: 20px;
  outline: none;
  border: ${(props) => props.theme.borderPrimary};
  border-radius: ${(props) => props.theme.radius};
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsSubTitle};
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    transform: translateY(-1px);
    cursor: pointer;
    color: ${(props) => props.theme.fcMain};
    background-color: ${(props) => props.theme.colorApp};
  }
  @media (max-width: 480px) {
    flex-direction: column;
    display: block;
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: block;
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    display: block;
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
`;

export const LinkMain = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  background-color: ${(props) => props.theme.fcWhite};
  padding: 10px 15px;
  margin-top: 20px;
  outline: none;
  border: ${(props) => props.theme.borderPrimary};
  border-radius: ${(props) => props.theme.radius};
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsSubTitle};
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    transform: translateY(-1px);
    cursor: pointer;
    color: ${(props) => props.theme.colorApp};
  }
  span {
    display: block;
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 5px 10px;
    margin-top: 10px;
  }
`;

export const GroupMain = styled.div`
  display: ${({ display }) => (display === "block" ? "block" : display)};
  justify-content: ${({ justify }) =>
    justify === "center" ? "center" : justify};
  align-items: ${({ align }) => (align === "center" ? "center" : align)};
`;
