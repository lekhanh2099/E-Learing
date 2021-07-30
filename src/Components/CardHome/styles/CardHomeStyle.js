import styled from "styled-components";
import { ButtonLinkMain, GroupMain, LinkMain } from "../../styles/main";
import { Card } from "../../Trending/styles/TrendingStyles";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: ${(props) => props.theme.transitionAll};
  box-shadow: ${(props) => props.theme.shadow};
`;

export const Content = styled(Card)`
  height: 480px;
  margin: 0;
  padding: 20px;
  overflow: hidden;
  z-index: 333;
  &:hover ${Background} {
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    height: 480px;
  }
  @media (max-width: 480px) {
    height: 430px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: ${(props) => props.theme.radius};
  margin-bottom: 20px;
  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsSubTitle};
  text-transform: capitalize;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Desc = styled.h3`
  color: ${(props) => props.theme.bgWhite};
  font-size: ${(props) => props.theme.fsText};
  font-weight: normal;
  line-height: 1.7;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.bgWhite};
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 10px;
  span {
    color: ${(props) => props.theme.colorApp};
    font-weight: bold;
    font-size: ${(props) => props.theme.fsText};
  }
`;

export const ButtonLink = styled(LinkMain)`
  background-color: ${(props) => props.theme.colorApp};
  color: ${(props) => props.theme.bgWhite};
  border: ${(props) => props.theme.borderPrimary};
  margin-right: 20px;
  @media (max-width: 480px) {
    display: block;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Button = styled(ButtonLinkMain)`
  background-color: ${(props) => props.theme.colorApp};
  color: ${(props) => props.theme.bgWhite};
  border: ${(props) => props.theme.borderPrimary};
  margin-right: 20px;
  @media (max-width: 480px) {
    display: block;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const ButtonMore = styled(LinkMain)``;

export const Group = styled(GroupMain)`
  bottom: 20px;
  left: 20px;
  position: absolute;
  @media (max-width: 480px) {
    display: flex;
    text-align: center;
    flex-wrap: column;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    flex-wrap: column;
    flex-direction: column;
    justify-content: center;
  }
`;
