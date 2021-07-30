import styled from "styled-components";
import { ButtonLinkMain } from "../../styles/main";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.bgCard};
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 40px;
  box-shadow: ${(props) => props.theme.shadow};

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    img {
      height: 200px;
    }
  }

  @media (max-width: 420px) {
    img {
      height: 200px;
    }
  }
`;

export const Content = styled.div`
  padding: 10px 20px;

  img {
    width: 25%;
  }
`;

export const GroupMeta = styled.div``;

export const Meta = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: white;
  line-height: 1.2;
  margin: 10px 0 0 0;
  min-height: 50px;

  @media (max-width: 1024px) {
    font-size: 16px;
    min-height: 60px;
  }
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: #c9c9c9;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Rating = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcTitle};
  margin-top: 10px;
  i {
    font-size: ${(props) => props.theme.fsText};
    color: ${(props) => props.theme.fcTitle};
    &:last-of-child {
      margin-right: 10px;
    }
  }

  span:first-child {
    font-size: ${(props) => props.theme.fsText};
    margin-right: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.fcTitle};
  }

  span:last-child {
    margin-left: 5px;
    color: ${(props) => props.theme.fcGray};
  }
`;

export const Button = styled(ButtonLinkMain)`
  background-color: ${(props) => props.theme.colorApp};
  color: ${(props) => props.theme.bgWhite};
  border: ${(props) => props.theme.borderPrimary};
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    font-size: 13px;
  }

  @media (max-width: 1023px) {
    margin-bottom: 10px;
    font-size: 13px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const ButtonMore = styled(NavLink)`
  background-color: transparent;
  color: ${(props) => props.theme.bgWhite};
  border: ${(props) => props.theme.borderPrimary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.fcWhite};
  padding: 10px 15px;
  outline: none;
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.fsSubTitle};
  transition: ${(props) => props.theme.transitionAll};
  margin-left: 10px;
  transition: ${(props) => props.theme.transitionAll};
  &:hover {
    color: ${(props) => props.theme.fcMain};
    background-color: ${(props) => props.theme.colorApp};
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    margin-left: 7px;
    margin-bottom: 15px;
    font-size: 13px;
  }

  @media (max-width: 1023px) {
    margin: 0;
    margin-bottom: 15px;
    font-size: 13px;
  }

  @media (max-width: 420px) {
    margin-left: 10px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    margin-top: 10px;
  }

  @media (max-width: 320px) {
    margin: 0;
    margin-bottom: 15px;
    font-size: 16px;
  }

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`;
