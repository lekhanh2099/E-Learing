import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { OverlayMain, SubTitleMain, TitleMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

export const Title = styled(TitleMain)``;

export const SubTitle = styled(SubTitleMain)``;

export const ImageLink = styled(NavLink)``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.radius};
`;
