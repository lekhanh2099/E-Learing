import styled from "styled-components";
import { GroupMain, TitleMain } from "../../styles/main";

export const Overlay = styled.div`
  .MuiInputBase-input {
    color: ${(props) => props.theme.fcMain};
  }
  fieldset {
    display: none;
  }
  svg {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colorDanger};
  }
  .MuiAutocomplete-root {
    @media (max-width: 1024px) {
      max-width: 350px;
    }
  }
`;

export const Content = styled.div``;
export const Wrapper = styled(GroupMain)`
  .MuiTextField-root {
    color: ${(props) => props.theme.colorApp};
    font-size: ${(props) => props.theme.fsSubTitle};
  }
  .MuiFormLabel-root {
    color: ${(props) => props.theme.colorApp};
    font-size: ${(props) => props.theme.fsSubTitle};
  }
  .MuiFormLabel-root.Mui-focused {
    font-size: ${(props) => props.theme.fsSubTitle};
  }
  .MuiInput-underline:after {
    border-bottom-color: transparent;
    display: none;
  }
  .MuiFormControl-root {
    width: 100%;
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
  .MuiInput-underline::after,
  .MuiInput-underline::before,
  .gcETxf .MuiInput-underline:focus {
    display: none;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.colorApp};
    border: none;
  }
  .MuiOutlinedInput-root.Mui-hover {
    border-color: ${(props) => props.theme.colorApp};
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.colorApp};
  }
  .MuiInput-root {
    display: flex;
    align-items: center;
  }
  .MuiAutocomplete-endAdornment {
    top: 0;
  }

  &.search-home {
    background-color: ${(props) => props.theme.bgBox};
    border: ${(props) => props.theme.borderPrimary};
    color: ${(props) => props.theme.fcMain};
    padding: 5px 20px 5px 60px;
    border-radius: 40px;
    svg {
      color: ${(props) => props.theme.bgWhite};
      width: 25px;
      height: 25px;
    }
    @media (max-width: 1024px) {
      min-width: 350px;
    }
  }
`;
export const Input = styled.div``;

export const Title = styled(TitleMain)``;

export const Name = styled.p`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcSecond};
  font-weight: normal;
`;
