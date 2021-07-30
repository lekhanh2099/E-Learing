import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";
import { SubTitleMain, TitleMain } from "../../styles/main";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 50px 40px;
  position: relative;
  overflow: hidden;
`;

export const Group = styled.div`
  width: 70%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Title = styled(TitleMain)``;

export const SubTitle = styled(SubTitleMain)`
  width: 70%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Filter = styled.div``;

export const GroupFilter = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const ButtonFilter = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.fcTitle};
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  color: ${(props) => props.theme.fcMain};
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 320px) {
    padding: 5px 10px;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const DropdownFilter = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: ${(props) => props.theme.borderPrimary};
  color: ${(props) => props.theme.fcTitle};
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  i {
    margin-left: 94px;
    transform: rotate(180deg);
    transition: all 0.5s ease;
    &.active {
      transform: rotate(0deg);
    }
  }
  @media (max-width: 420px) {
    i {
      margin-left: 46px;
    }
  }
  @media (max-width: 320px) {
    padding: 9px 6px;
  }
`;

const opacityDropdown = keyframes`
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: #5c5d64;
  color: ${(props) => props.theme.fcMain};
  font-size: 16px;
  font-weight: normal;
  top: 36px;
  width: 100%;
  right: 0;
  left: -1px;
  min-width: 204px;
  z-index: 1;
  border-radius: 0 0 10px 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: flex-start;
  animation: ${opacityDropdown} 0.5s ease;
  @media (max-width: 420px) {
    font-size: 14px;
    min-width: 156px;
    top: 36px;
  }
  @media (max-width: 320px) {
    min-width: 138px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    li {
      margin: 0;
      width: 100%;
      text-align: left;
      line-height: 2;
      a {
        color: white;
        transition: all 0.2s;
        &:hover {
          color: #ff9800;
        }
      }
    }
  }
`;

export const Wrap = styled.div`
  display: block;
  width: 86%;
  border-top: 2px solid #c9c9c9;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    border-bottom: 2px solid #c9c9c9;
  }
`;

export const GroupListFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.fcMain};
  position: relative;
  font-size: 16px;
  cursor: pointer;
  > i {
    transform: rotate(180deg);
    transition: all 0.5s ease;
  }
  i.active {
    transform: rotate(0deg);
    transition: all 0.5s ease;
  }
`;

export const WrapFilterMobile = styled.div`
  display: block;
  width: 100%;
  border-top: 2px solid #c9c9c9;
  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    border-bottom: 2px solid #c9c9c9;
  }
`;

export const GroupList = styled.div`
  display: block;
  height: auto;
  opacity: 1;
  transition: all 0.5s ease;
  &.active {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: all 0.5s ease;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ListFilter = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.fcMain};
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-weight: bold;
  svg {
    margin-left: 50px;
  }
`;

export const GroupCheckBox = styled.div`
  height: 0;
  overflow: hidden;
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.5s ease;
  &.active {
    display: block;
    height: auto;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const WrapCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: white;
  i {
    font-size: 16px;
    margin-left: 5px;
    color: #ff9800;
  }
  span {
    color: ${(props) => props.theme.fcGray};
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
`;

const opacity = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const OverlayFilter = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    &.active {
      position: fixed;
      border: none;
      margin: 0;
      padding: 0;
      width: 100%;
      overflow: visible;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => props.theme.mark};
      z-index: 1;
      animation: ${opacity} 0.5s ease;
    }
  }
`;

export const FilterMobile = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    background-color: ${(props) => props.theme.bgPrimary};
    position: fixed;
    width: 60%;
    top: 88px;
    bottom: 0;
    right: -100%;
    padding: 10px 40px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 2;
    &.active {
      right: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    top: 70px;
  }
`;

export const Detail = styled.div``;

export const GroupCourses = styled.div`
  display: flex;
  padding-bottom: 74px;
  color: ${(props) => props.theme.fcMain};
  position: relative;
  font-size: 16px;

  &:before {
    content: "";
    position: absolute;
    background: #c9c9c9;
    height: 1px;
    left: 0;
    bottom: 36px;
    right: 0;
  }
  &:first-of-type {
    margin-top: 17px;
  }
  &:last-of-type:before {
    display: none;
  }
  @media (max-width: 420px) {
    display: block;
  }
`;

export const Image = styled(NavLink)`
  cursor: pointer;
  max-width: 300px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 0 20px;
  line-height: 1.5;
  width: 100%;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    padding: 10px 0;
  }
`;

export const GroupName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.h3`
  margin: 0;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin: 0;
  width: 85%;
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: #c9c9c9;
  display: flex;
  align-items: center;
  svg {
    font-size: 10px;
    margin: 0 5px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Rating = styled.p`
  font-size: 16px;
  margin: 0;
  color: #ff9800;
  font-weight: bold;
  display: flex;
  align-items: center;
  svg {
    font-size: 18px;
    margin-left: 2px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Certificate = styled.button`
  color: ${(props) => props.theme.fcMain};
  font-size: 12px;
  font-weight: bold;
  border: none;
  background: #ff9800;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 8px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ResultFilterMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.shadow};
  font-size: 16px;
  color: white;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;
  i {
    cursor: pointer;
    font-size: 20px;
  }
`;

export const ResultTitle = styled.h3``;
