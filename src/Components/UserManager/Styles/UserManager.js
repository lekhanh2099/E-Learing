import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GroupMain, TitleMain } from "../../styles/main";

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

export const ButtonHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colorSuccess};
  border-radius: ${(props) => props.theme.radius};
  .MuiButton-root {
    padding: 10px 5px;
    color: ${(props) => props.theme.bgWhite};
    font-size: ${(props) => props.theme.fsSubTitle};
    text-transform: none;
  }
`;

export const ButtonGroup = styled.div`
  .MuiButton-root {
    text-transform: none;
    font-size: ${(props) => props.theme.fsText};
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
export const Wrapper = styled(GroupMain)`
  margin-bottom: 20px;
`;
export const Title = styled(TitleMain)``;

export const Edit = styled(NavLink)`
  color: ${(props) => props.theme.colorSuccess};
  &:hover {
    color: ${(props) => props.theme.colorSuccess};
  }
`;

export const Register = styled.a`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.fcTitle};
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Delete = styled.span`
  padding: 10px 20px;
  background-color: #bb371a;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
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
  .MuiInput-formControl,
  .MuiInputLabel-root.Mui-focused,
  label {
    font-size: ${(props) => props.theme.fsSubTitle};
    color: ${(props) => props.theme.colorApp};
  }
  .MuiInputLabel-outlined {
    font-size: 2rem;
  }
  .MuiOutlinedInput-root {
    border: none;
  }
  div.MuiAutocomplete-popper {
    display: none;
    color: blue;
    font-size: 2rem;
    ul,
    li {
      color: blue;
    }
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
