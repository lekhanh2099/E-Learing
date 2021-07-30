import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgSecondary};
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Menu = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fsTitle};
  color: ${(props) => props.theme.fcTitle};
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  margin-bottom: 10px;
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.fsSubTitle};
  transition: ${(props) => props.theme.transitionAll};
  color: ${(props) => props.theme.fcMain};
  cursor: pointer;
  svg {
    font-size: 2.5rem;
    margin-right: 10px;
  }
  &:hover {
    background-color: ${(props) => props.theme.fcTitle};
    color: white;
  }
`;
