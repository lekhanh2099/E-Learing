import styled from "styled-components";
import { ButtonLinkMain, LinkMain, OverlayMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  border-radius: ${(props) => props.theme.radius};
  padding: 0;
  margin: 0;
  z-index: 99;
  position: fixed;
  width: 400px;
  top: 120px;
  background-color: ${(props) => props.theme.bgPrimary};
  transition: ${(props) => props.theme.transitionAll};
  &.bottom {
    top: 0;
    bottom: 280px;
  }
`;

export const Content = styled.div`
  padding: 0 20px 20px 20px;
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

export const Price = styled.h4`
  text-align: center;
  font-size: 2.3rem;
  color: ${(props) => props.theme.colorApp};
  line-height: 2;
  font-weight: bold;
  span {
    padding-right: 10px;
    font-size: 12px;
    text-decoration: line-through;
    color: ${(props) => props.theme.fcMain};
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${(props) => props.theme.fcMain};
  margin-right: 10px;
  line-height: 2;
  span {
    padding-right: 10px;
    color: ${(props) => props.theme.fcGray};
  }
`;

export const TextSub = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.fcMain};
  font-weight: normal;
  span {
    margin-right: 10px;
  }
`;

export const Icon = styled.span``;

export const Discount = styled.div``;

export const Button = styled(ButtonLinkMain)`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colorApp};
  color: ${(props) => props.theme.fcMain};
  @media (max-width: 480px) {
    margin-bottom: 0;
    padding: 10px 10px;
  }
`;

export const Link = styled(LinkMain)`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 10px;
  text-align: center;
  color: ${(props) => props.theme.fcMain};
  background-color: ${(props) => props.theme.colorApp};
  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;
