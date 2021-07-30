import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TitleMain } from "../../styles/main";

export const Container = styled.div`
  flex: 4;
  width: 100%;
  height: 450px;
  padding: 30px 30px;
  outline: none !important;
  .MuiDataGrid-columnHeaderTitle {
    font-size: 2rem;
    text-align: center;
  }
  .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within,
  .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-cell--textLeft {
    font-size: 2rem;
  }

  .MuiTablePagination-caption {
    font-size: 2rem;
  }

  .MuiOutlinedInput-input {
    font-size: 2rem;
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

export const Header = styled(TitleMain)`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  border: none;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fsTitle};
`;

export const ButtonGroup = styled.div``;

export const Edit = styled(NavLink)`
  padding: 10px 20px;
  background-color: #3bb077;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
  margin: 0 10px;

  &:hover {
    color: white;
  }
`;

export const Register = styled.a`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.fcTitle};
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;

  &:hover {
    color: white;
  }
`;

export const Delete = styled(NavLink)`
  padding: 10px 20px;
  background-color: #bb371a;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;

  &:hover {
    color: white;
  }
`;

export const Search = styled.button``;

export const InputSearch = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    width: 85%;
  }

  .MuiInputLabel-outlined {
    font-size: 1.4rem;
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.fcTitle};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;

  &:hover {
    color: white;
  }
`;
