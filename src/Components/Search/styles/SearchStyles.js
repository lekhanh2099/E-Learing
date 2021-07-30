import styled from "styled-components";
import {
  ButtonLinkMain,
  GroupMain,
  OverlayMain,
  TitleMain,
} from "../../styles/main";

export const Overlay = styled(OverlayMain)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

export const Title = styled(TitleMain)`
  display: block;
  border: none;
`;

export const Warning = styled.h2`
  display: inline-flex;
  height: 70px;
  background-color: ${(props) => props.theme.fcGray};
  border: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.fcMain};
  border-radius: ${(props) => props.theme.radius};
  padding: 0 20px;
  align-items: center;
  color: ${(props) => props.theme.fcMain};
  font-size: ${(props) => props.theme.fsSubTitle};
  span {
    padding-right: 20px;
    font-size: 2.5rem;
    color: #6e1a52;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Filter = styled(ButtonLinkMain)`
  margin-right: 20px;
  span {
    padding-right: 10px;
  }
`;

export const SelectGroup = styled.div`
  border-top: ${(props) => props.theme.border};
`;

export const SelectName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  span {
    display: block;
    width: 100%;
    text-align: right;
  }
  &:last-of-type {
  }
`;

export const SelectValue = styled.div``;

export const Value = styled.p`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcMain};
`;

export const Relevant = styled(Filter)``;

export const Results = styled.div`
  margin: 40px 0;
`;

export const Group = styled(GroupMain)``;
