import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GroupMain, LinkMain, TitleMain } from "../../styles/main";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 30px;
  margin-top: ${(props) => props.theme.height};
  background-color: ${(props) => props.theme.bgPrimary};

  .MuiDataGrid-root {
    min-height: 400px;
    border-color: ${(props) => props.theme.colorApp};
    color: ${(props) => props.theme.fcMain};
    background-color: ${(props) => props.theme.bgSecondary};
  }
  .MuiTablePagination-root {
    color: ${(props) => props.theme.fcMain};
  }

  .MuiDataGrid-columnHeaderTitle {
    font-size: ${(props) => props.theme.fsSubTitle};
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.fcMain};
  }
  .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within,
  .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-cell--textLeft {
    font-size: ${(props) => props.theme.fsText};
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

export const ButtonHeader = styled(LinkMain)`
  background-color: ${(props) => props.theme.colorSuccess};
  border-radius: ${(props) => props.theme.radius};
  color: ${(props) => props.theme.bgWhite};
  font-size: ${(props) => props.theme.fsSubTitle};
  text-transform: none;
  border: none;
  &:hover {
    transform: translateY(-1px);
    cursor: pointer;
    color: ${(props) => props.theme.bgWhite};
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
    &.detail {
      color: ${(props) => props.theme.fcMain};
      background-color: ${(props) => props.theme.colorSuccess};
      a {
        color: ${(props) => props.theme.fcMain};
      }
    }
    &.control {
      color: ${(props) => props.theme.fcMain};
      background-color: ${(props) => props.theme.colorWarning};
      a {
        color: ${(props) => props.theme.fcMain};
      }
    }
    &.delete {
      color: ${(props) => props.theme.fcMain};
      background-color: ${(props) => props.theme.colorDanger};
    }
  }
`;
export const Wrapper = styled(GroupMain)`
  margin-bottom: 20px;
`;
export const Title = styled(TitleMain)`
  &.create {
    display: block;
    text-align: center;
    border-bottom: none;
  }
`;

export const SubTitle = styled.h2`
  color: #000;
  font-size: ${(props) => props.theme.fsSubTitle};
  font-weight: bold;
  margin-bottom: 10px;
`;

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

export const Box = styled.div`
  .MuiDataGrid-root {
    min-height: 600px;
    border-color: ${(props) => props.theme.colorApp};
    color: ${(props) => props.theme.fcMain};
    background-color: ${(props) => props.theme.bgSecondary};
  }
  .MuiTablePagination-root {
    color: ${(props) => props.theme.fcMain};
  }
  .MuiDialogTitle-root {
    background-color: ${(props) => props.theme.bgPrimary};
  }
  .MuiDataGrid-cell--textCenter {
    width: 100%;
    font-weight: bold;
  }
`;

export const ImageCell = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const ImageThumbnail = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;
