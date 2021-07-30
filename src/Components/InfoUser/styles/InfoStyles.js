import styled from "styled-components";
import { ButtonLinkMain } from "../../styles/main";

export const Overlay = styled.form`
  padding: 20px 0;
`;

export const Title = styled.h1``;

export const FormControl = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colorApp};
  margin-bottom: 5px;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: 40px;
  font-size: 1.6rem;
  color: ${(props) => props.theme.fcMain};
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 0 20px;
  font-weight: normal;
`;

export const Error = styled.p``;

export const Button = styled(ButtonLinkMain)`
  display: block;
  width: 100%;
`;
