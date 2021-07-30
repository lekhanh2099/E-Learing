import styled from "styled-components";
import {
  OverlayMain,
  TitleMain,
  SubTitleMain,
  GroupMain,
  LinkMain,
} from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  position: relative;
`;
export const HeroBg = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.mark};
    border-radius: ${(props) => props.theme.radius};
    z-index: 111;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: ${(props) => props.theme.mark};
`;

export const Container = styled.div`
  z-index: 9;
`;

export const Title = styled(TitleMain)``;

export const SubTitle = styled(SubTitleMain)``;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  z-index: 29;
  padding: 10px 20px;
  margin-bottom: 36px;
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};
  transition: ${(props) => props.theme.transitionAll};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  &:after {
    position: absolute;
    content: "";
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: ${(props) => props.theme.radius};
  }
  &:hover {
    background-size: 125%;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    height: 240px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 111;
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.colorApp};
  font-weight: bold;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const SubName = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.bgWhite};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.5;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const Student = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.bgWhite};
  font-weight: normal;
  margin-bottom: 5px;
  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colorApp};
    padding: 0 10px;
    font-weight: bold;
  }
`;

// Button for Home page or global, can import and config anywhere

export const ButtonLink = styled(LinkMain)`
  @media (max-width: 768px) {
    display: flex;
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${(props) => props.theme.colorApp};
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    @media (max-width: 480px) {
      width: 100%;
      padding: 5px 10px;
      margin-top: 10px;
    }
  }
`;

export const Group = styled(GroupMain)``;
