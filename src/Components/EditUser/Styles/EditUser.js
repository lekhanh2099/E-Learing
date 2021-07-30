import styled from "styled-components";
import { TitleMain } from "../../styles/main";

export const Container = styled.div``;
export const Form = styled.form``;

export const Overlay = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.bgPrimary};
  width: 700px;
  @media (max-width: 480px) {
    height: 700px;
  }
  &.info-user {
    width: 100%;
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

export const Title = styled.h3`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colorApp};
  padding: 10px 0;
  text-align: center;
`;

export const GroupInput = styled.div`
  display: flex;

  justify-content: space-around;
  padding: 20px 0;
  .MuiFormControl-root {
    width: 400px;
    margin: 0 20px;
  }
  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:after {
    display: none;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.colorApp};
  }
  .MuiFilledInput-root {
    background-color: white;
  }

  .MuiInputLabel-filled {
    font-size: 1.5rem;
  }

  .MuiFilledInput-input {
    background-color: ${(props) => props.theme.fcGray};
    border-radius: ${(props) => props.theme.radius};
    font-size: ${(props) => props.theme.fsText};
  }

  .MuiFormHelperText-root.Mui-error {
    font-size: 1.3rem;
  }
`;

export const GroupSelect = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;

  .MuiMenuItem-root {
    font-size: 1.5rem;
  }

  .MuiFormControl-root {
    width: 400px;
  }

  .MuiInputLabel-filled {
    font-size: 1.5rem;
  }

  .MuiFilledInput-input {
    font-size: 1.5rem;
  }

  .MuiFilledInput-root {
    background-color: white;
  }

  .MuiInputLabel-filled.MuiInputLabel-shrink {
    font-size: 1.5rem;
  }

  .MuiSelect-filled.MuiSelect-filled {
    font-size: 1.5rem;
  }

  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    font-size: 1.5rem;
  }

  .MuiFormHelperText-root.Mui-error {
    font-size: 1.3rem;
  }
`;

export const ButtonUpload = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colorSuccess};
  border-radius: ${(props) => props.theme.radius};
  width: 70%;
  .MuiButton-root {
    color: ${(props) => props.theme.bgWhite};
    font-size: ${(props) => props.theme.fsSubTitle};
    width: 100%;
    text-transform: none;
  }
`;
