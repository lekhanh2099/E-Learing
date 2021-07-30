import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.fcMain};
  .MuiPagination-ul li button {
    color: ${(props) => props.theme.fcMain};
    font-size: ${(props) => props.theme.fsText};
  }
  .MuiPaginationItem-textPrimary.Mui-selected {
    background-color: ${(props) => props.theme.colorApp};
  }
`;
