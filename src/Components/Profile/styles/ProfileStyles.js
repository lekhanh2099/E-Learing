import styled from "styled-components";
import { LinkMain, OverlayMain, TitleMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

export const Header = styled.header``;

export const ImgCover = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${(props) => props.theme.radius};
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: -80px;
  z-index: 111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .MuiAvatar-circle {
    width: 200px;
    height: 200px;
    border: ${(props) => props.theme.border};
    border-width: 4px;
    cursor: pointer;
  }
`;

export const UserName = styled.p`
  font-size: ${(props) => props.theme.fsTitle};
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
  margin-top: 10px;
`;

export const Title = styled(TitleMain)``;

export const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const Link = styled(LinkMain)`
  display: inline-block;
  padding: 20px 10px;
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.fsSubTitle};
  font-weight: bold;
  color: ${(props) => props.theme.bgWhite};
  margin-right: 40px;
  &:last-of-type {
    margin-right: 0;
  }
  &.activedCart {
    background-color: ${(props) => props.theme.colorApp};
    color: ${(props) => props.theme.fcMain};
  }
  &.activedProfile {
    background-color: ${(props) => props.theme.fcGray};
  }
  @media (max-width: 480px) {
    padding: 5px 10px;
    margin-top: 10px;
    text-align: center;
    display: flex;
    font-size: ${(props) => props.theme.fsText};
  }
`;
