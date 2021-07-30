import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GroupMain } from "../../styles/main";

export const Overlay = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
  display: flex;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.height};
  align-items: center;
  width: 100%;
  height: 800px;
  @media (max-width: 480px) {
    margin-top: ${(props) => props.theme.heightMobile};
    height: 700px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 660px;
  background-color: ${(props) => props.theme.mark};
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  padding: 20px 50px;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const Error = styled.div`
  background-color: transparent;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fsText};
  color: ${(props) => props.theme.colorDanger};
  padding: 10px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  .MuiFormControl-root {
    .MuiInput-underline:before,
    .MuiInput-underline:after {
      display: none;
    }
    label {
      z-index: 1;
      color: ${(props) => props.theme.colorApp};
      font-size: ${(props) => props.theme.fsText};
    }
    input.MuiInputBase-input {
      font-size: ${(props) => props.theme.fsText};
    }
    .MuiFilledInput-underline:after {
      border-radius: ${(props) => props.theme.radius};
      border-bottom: 2px solid ${(props) => props.theme.colorApp};
    }
  }
  .detaiCourse {
    textarea {
      width: 100%;
      min-height: 130px;
      background-color: ${(props) => props.theme.bgPrimary};
      color: ${(props) => props.theme.colorApp};
      font-size: ${(props) => props.theme.fsText};
      padding: 40px 10px;
      border-top-left-radius: ${(props) => props.theme.radius};
      border-top-right-radius: ${(props) => props.theme.radius};
      line-height: 1.6;
    }
    .MuiInputBase-root {
      padding-left: 0;
    }
    input {
      display: none;
    }
  }
  &.form-create-user {
    border: ${(props) => props.theme.border};
    border-color: ${(props) => props.theme.colorApp};
    min-width: 600px;
    padding: 20px 30px;
    border-radius: ${(props) => props.theme.radius};
  }
`;

export const FormBox = styled(Base)`
  max-width: 100%;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: unset !important;
  padding: 20px 30px;
  &.choose {
    background-color: unset;
    border-radius: ${(props) => props.theme.radius};
    box-shadow: unset !important;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.fcMain};
  border-bottom: ${(props) => props.theme.border};
  text-align: center;
  padding-bottom: 10px;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fsSubTitle};
  color: ${(props) => props.theme.fcMain};
  margin: 10px;
  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fsText};
  }
`;

export const TextSmall = styled(Text)`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
`;

export const Input = styled.div`
  position: relative;
  /* box-shadow: ${(props) => props.theme.shadow}; */
  width: 100%;
  margin-bottom: 10px;
  svg {
    color: ${(props) => props.theme.colorApp};
  }
  input {
    color: ${(props) => props.theme.colorApp} !important;
  }
  .MuiPickersToolbar-toolbar {
    background-color: ${(props) => props.theme.bgPrimary};
  }
  .input-file {
    position: relative;
    box-shadow: ${(props) => props.theme.shadow};
    width: 100%;
  }
  .MuiPaper-root {
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.colorApp};
    font-size: ${(props) => props.theme.fsText};
    li {
    }
  }
  .MuiSelect-root {
    padding: 27px 12px 10px;
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.colorApp};
    font-size: ${(props) => props.theme.fsText};
  }

  .MuiFormControl-root,
  .MuiSelect-root {
    width: 100%;
  }
  .MuiFilledInput-root,
  .MuiSelect-root,
  .MuiInputBase-root {
    width: 100%;
    background-color: ${(props) => props.theme.bgSecondary};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  input {
    color: ${(props) => props.theme.fcMain};
    border-radius: 5px;
  }
  span.material-icons {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: block;
    color: ${(props) => props.theme.fcMain};
  }
`;

export const Submit = styled.button`
  background-color: ${(props) => props.theme.colorSuccess};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  margin-bottom: 20px;
  border: none;
  color: ${(props) => props.theme.fcMain};
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
  &.add {
    background-color: ${(props) => props.theme.colorSuccess};
  }
`;

export const PickerFile = styled.div`
  text-align: right;
  min-width: 100px;
  .MuiButton-root {
    text-transform: none;
    font-size: ${(props) => props.theme.fsText};
    margin-right: 20px;
    color: ${(props) => props.theme.colorApp};
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const LoginWith = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 10px 20px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: ${(props) => props.theme.radius};
  transition: ${(props) => props.theme.transitionAll};

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    opacity: 0.6;
  }
`;

export const ImgIcon = styled.img`
  display: inline-block;
  margin-right: 40px;
  width: 30px;
  height: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colorApp};
  transition: ${(props) => props.theme.transitionAll};

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px dashed ${(props) => props.theme.hoverColor};
  width: 100%;
  height: 300px;
  border-radius: ${(props) => props.theme.radius};
  margin-bottom: 20px;
`;

export const TitlePreview = styled.h3`
  text-align: center;
  margin-top: 20px;
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsTitle};
  font-weight: normal;
`;

export const SubTitlePreview = styled.label`
  color: ${(props) => props.theme.fcGray};
  font-size: ${(props) => props.theme.fsTitle};
  font-weight: normal;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 400px;
  height: 100%;
  border-radius: ${(props) => props.theme.radius};
  padding: 20px;
`;

export const ItemValueSelected = styled.li`
  color: ${(props) => props.theme.colorApp};
  font-size: ${(props) => props.theme.fsSubTitle};
  padding: 4px 10px;
  cursor: pointer;
`;

export const Wrapper = styled(GroupMain)``;
