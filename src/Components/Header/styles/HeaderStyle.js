import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { List } from "../../Cart/styles/CartStyle";
import { GroupMain, LinkMain } from "../../styles/main";
import { Overlay as SearchHisory } from "../../HistorySearch/styles/HistorySearchStyles";

export const Overlay = styled.div`
  background-color: ${(props) => props.theme.colorNav};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 222;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const HeaderNav = styled.div`
  position: relative;
  margin: 0 20px;
  padding: 20px;
  height: ${(props) => props.theme.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 222;
  @media (max-width: 480px) {
    padding: 0;
    margin: 0;
    height: ${(props) => props.theme.heightMobile};
  }
`;

export const LogoLink = styled(NavLink)`
  img {
    width: 100px;
    height: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
    display: block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const NavbarLink = styled(NavLink)`
  color: ${(props) => props.theme.fcMain};
  font-size: ${(props) => props.theme.fsText};
  font-weight: bold;
  transition: all 0.4s;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const CoursesList = styled.ul`
  position: absolute;
  top: 60px;
  left: -120px;
  min-width: 350px;
  background-color: ${(props) => props.theme.bgPrimary};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};

  animation: headerNotifyGrowth 0.4s ease;
  transform-origin: top;
  transform-style: flat;
  display: none;

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

export const Courses = styled.p`
  position: relative;
  color: ${(props) => props.theme.fcMain};
  font-size: ${(props) => props.theme.fsText};
  font-weight: bold;
  transition: all 0.4s;
  cursor: pointer;
  margin-bottom: 0;
  &:hover {
    transition: all 0.4s;
    color: ${(props) => props.theme.hoverColor};
  }
  &:hover ${CoursesList} {
    display: block;
  }
  &::after {
    content: "";
    position: absolute;
    display: flex;
    width: 140%;
    height: 40px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    cursor: default;
  }
`;

export const CoursesItem = styled.p`
  padding: 0;
  margin-bottom: 0;
  border-bottom: ${(props) => props.theme.border};
  transition: ${(props) => props.theme.transitionAll};
  &:last-of-type {
    border: none;
  }
  &:hover {
    transform: translateY(-1px);
  }
`;

export const CoursesItemLink = styled(LinkMain)`
  display: block;
  padding: 0;
  margin: 0;
  text-align: left;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fsSubTitle};
  font-weight: normal;
  color: ${(props) => props.theme.fcMain};
  text-transform: capitalize;
  border: none;
`;

//! Search

export const Search = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SearchLink = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  height: 39px;
  width: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fcGray};
  border-radius: 30px;
  border: none;
  transition: ${(props) => props.theme.transitionAll};
  svg {
    color: ${(props) => props.theme.colorApp};
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  min-width: 700px;
  border-radius: 30px;
  border: ${(props) => props.theme.border};
  padding: 10px 10px 10px 40px;
  color: ${(props) => props.theme.fcDark};
  font-size: 16px;
  @media (max-width: 1280px) {
    min-width: 400px;
  }
  @media (max-width: 1024px) {
    min-width: 200px;
  }
  /* &:focus ~ ${SearchHisory} {
    display: block;
  } */
`;

export const Mask = styled.div`
  position: relative;
`;

export const SearchInputMobile = styled.span`
  position: fixed;
  top: ${(props) => props.theme.heightMobile};
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  display: none;
  animation: mobileSearchSideIn linear 0.3s;
  z-index: 1;
  @media (max-width: 480px) {
    top: ${(props) => props.theme.heightMobile};
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
  }

  @keyframes mobileSearchSideIn {
    from {
      opacity: 0;
      top: 35px;
      z-index: -1;
    }
    to {
      opacity: 1;
      top: 70px;
      z-index: 6;
    }
  }
`;

export const SearchMobile = styled.span`
  position: relative;
  height: 40px;
  width: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.fcMain};
  svg {
    width: 1.4em;
    height: 1.4em;
  }
  @media (max-width: 480px) {
    position: relative;
    height: 100%;
    margin: 0;
  }

  &:hover ${SearchInputMobile} {
    display: block;
  }
`;

//! Cart

export const CartLink = styled(NavLink)`
  position: relative;
  svg {
    color: ${(props) => props.theme.fcMain};
    width: 2.2rem;
    height: 2.2rem;
    @media (max-width: 480px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  span {
    color: ${(props) => props.theme.fcMain};
    font-size: ${(props) => props.theme.fsText};
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  &:hover ${List} {
    display: block;
  }
  &::after {
    display: block;
    position: absolute;
    content: "";
    width: 130%;
    height: 30px;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
  }
`;

export const DarkMode = styled.div`
  span {
    color: ${(props) => props.theme.fcMain};
  }
`;
export const DarkModeIcon = styled.div``;

export const AboutUsLink = styled(NavbarLink)`
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SignInLink = styled(NavbarLink)`
  margin-right: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  border: ${(props) => props.theme.borderPrimary};
  &:hover {
    border-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const SignUpLink = styled(NavbarLink)`
  background-color: ${(props) => props.theme.btnColor};
  padding: 10px 15px;
  border-radius: 5px;
  color: ${(props) => props.theme.fcMain};
  &:hover {
    color: ${(props) => props.theme.fcGray};
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const LogOut = styled.p`
  position: absolute;
  bottom: -50px;
  right: 0px;
  background-color: ${(props) => props.theme.mark};
  padding: 10px 10px;
  width: 90px;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  color: ${(props) => props.theme.fcGray};
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
  display: none;
`;

export const NameUser = styled.p`
  position: relative;
  font-size: ${(props) => props.theme.fsText};
  font-weight: bold;
  letter-spacing: 1px;
  color: ${(props) => props.theme.fcMain};
  margin-left: 10px;
  text-transform: capitalize;
  cursor: pointer;
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
  }
  &:hover ${LogOut} {
    display: block;
  }
`;

export const UserLogined = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
`;

export const Group = styled(GroupMain)`
  @media (max-width: 480px) {
    /* position: relative; */
  }
`;
