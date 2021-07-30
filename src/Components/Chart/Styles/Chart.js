import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0;
  font-size: ${(props) => props.theme.fsSubTitle};
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: 1280px) {
    .MuiContainer-maxWidthLg {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fsTitle};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colorSuccess};
  margin-bottom: 20px;
`;
