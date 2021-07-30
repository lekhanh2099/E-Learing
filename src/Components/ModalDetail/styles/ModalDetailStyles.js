import styled from "styled-components";

export const Overlay = styled.div`
  padding: 90px 20px;
  background-color: ${(props) => props.theme.bgPrimary};
  .MuiButton-root {
    &.register {
      padding: 5px 0;
      min-width: 200px;
      background-color: ${(props) => props.theme.colorSuccess};
      color: ${(props) => props.theme.fcMain};
    }
  }
  .MuiDataGrid-root {
    height: 200px;
    border-color: ${(props) => props.theme.colorApp};
    color: ${(props) => props.theme.fcMain};
  }
  .MuiTablePagination-root {
    color: ${(props) => props.theme.fcMain};
  }
  .MuiDataGrid-columnsContainer {
    text-align: center;
  }
  .MuiDataGrid-columnHeaderTitle {
    font-size: 2rem;
  }
  .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within,
  .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-cell--textLeft {
    font-size: 2rem;
    justify-content: center;
  }

  .MuiTablePagination-caption {
    font-size: 2rem;
  }

  .MuiOutlinedInput-input {
    font-size: 2rem;
  }
  .MuiDataGrid-cell--textLeft.MuiDataGrid-cell--withRenderer {
    justify-content: center;
  }
  .MuiDataGrid-root {
    outline: none;
  }
  .MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  .MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
  .MuiDataGrid-selectedRowCount {
    font-size: 1.6rem;
  }
  .MuiInput-underline::after,
  .MuiInput-underline::before,
  .MuiInput-underline:focus,
  &:hover {
    border: none;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: ${(props) => props.theme.border};
    border-width: 2px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => props.theme.border};
  border-width: 2px;
  padding: 10px 20px;
  margin-bottom: 20px;
  .MuiButton-root {
    text-transform: none;
    font-size: ${(props) => props.theme.fsText};
    color: ${(props) => props.theme.colorApp};
    border-color: ${(props) => props.theme.colorApp};
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  max-height: 300px;
  height: 300px;
  color: ${(props) => props.theme.fcMain};
  border-width: 2px;
  &:last-of-type {
    margin-top: 60px;
  }
  &.detail-course-manager {
    min-height: 400px;
    margin-bottom: 80px;
    .MuiDataGrid-root {
      min-height: 400px;
      border-color: ${(props) => props.theme.colorApp};
      color: ${(props) => props.theme.fcMain};
    }
    h1 {
      font-size: ${(props) => props.theme.fsTitle};
      margin-bottom: 0;
      color: ${(props) => props.theme.fcMain};
    }
    &.list-student {
      min-height: 500px;
      .MuiDataGrid-root {
        min-height: 500px;
      }
    }
  }
`;

export const Footer = styled.div``;

export const Button = styled.div``;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fsTitle};
  color: ${(props) => props.theme.colorWarning};
  font-weight: bold;
  text-align: center;
  padding: 20px;
  background-color: ${(props) => props.theme.bgPrimary};
  margin-bottom: 0;
  &.detail-course-manager {
    color: ${(props) => props.theme.fcMain};
    margin-bottom: 20px;
    span {
      color: ${(props) => props.theme.colorApp};
      padding: 0 10px;
    }
  }
`;

export const Subtitle = styled(Title)`
  text-align: left;
  padding: 10px;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.fcGray};
  margin-bottom: 20px;
  &.ModalDetail-Header {
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fsTitle};
    color: ${(props) => props.theme.colorApp};
    opacity: 1;
  }
`;
