import styled from "styled-components";
import { TitleMain, OverlayMain, SubTitleMain } from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgSecondary};
  span.MuiTabs-indicator {
    background-color: ${(props) => props.theme.colorApp};
    padding: 2px 0;
    border-radius: ${(props) => props.theme.radius};
  }
`;
export const Content = styled.div``;

export const Title = styled(TitleMain)``;

export const Desc = styled(SubTitleMain)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
