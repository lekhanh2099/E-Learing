import styled from "styled-components";
import { TitleMain } from "../../styles/main";

export const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.bgPrimary};
  @media (min-width: 1280px) {
    .MuiContainer-maxWidthLg {
      max-width: 100%;
    }
  }
`;

export const Header = styled(TitleMain)`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  border: none;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fsTitle};
`;

export const Item = styled.div`
  padding: 30px;
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.bgRgba};
`;

export const Title = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.fcMain};
  font-weight: bold;
`;

export const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colorDanger};
  font-weight: bold;
  svg {
    font-size: 14px;
    margin-left: 5px;
    color: green;

    &.negative {
      color: red;
    }
  }
`;

export const Money = styled.span`
  font-size: 3rem;
  color: ${(props) => props.theme.colorSuccess};
  font-weight: bold;
`;

export const Sub = styled.span`
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcGray};
  font-weight: bold;
`;
