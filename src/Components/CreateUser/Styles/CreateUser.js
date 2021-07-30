import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colorApp};
  padding: 10px 0;
  text-align: center;
`;

export const GroupInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:after {
    display: none;
  }
  .MuiFormControl-root {
    width: 400px;
    margin: 0 10px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.colorApp};
  }
  .MuiFilledInput-root {
    background-color: white;
  }

  .MuiInputLabel-filled {
    font-size: ${(props) => props.theme.fsSubTitle};
  }

  .MuiFilledInput-input {
    background-color: ${(props) => props.theme.fcGray};
    border-radius: none;
    border-radius: ${(props) => props.theme.radius};
    font-size: ${(props) => props.theme.fsSubTitle};
  }

  .MuiFormHelperText-root.Mui-error {
    font-size: 1.3rem;
  }
`;

export const GroupSelect = styled.div`
  display: flex;
  justify-content: space-around;
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
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colorSuccess};
  border-radius: ${(props) => props.theme.radius};
  .MuiButton-root {
    width: 100%;
    padding: 10px 5px;
    color: ${(props) => props.theme.bgWhite};
    font-size: ${(props) => props.theme.fsSubTitle};
    text-transform: none;
  }
`;
