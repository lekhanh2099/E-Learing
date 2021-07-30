import React from "react";
import {
  Base,
  Container,
  LoginWith,
  Error,
  Link,
  Text,
  TextSmall,
  Title,
  Input,
  Submit,
  Overlay,
  ImgIcon,
  FormBox,
  PickerFile,
  Preview,
  TitlePreview,
  ImagePreview,
  SubTitlePreview,
  ItemValueSelected,
  Wrapper,
} from "./styles/FormStyles";

// Comment
export default function Form({ children, ...restPops }) {
  return <Form {...restPops}>{children}</Form>;
}
Form.Container = function FormContainer({ children, ...restPops }) {
  return <Container {...restPops}>{children}</Container>;
};

Form.Base = function FormBase({ children, ...restPops }) {
  return <Base {...restPops}>{children}</Base>;
};

Form.FormBox = function FormFormBox({ children, ...restPops }) {
  return <FormBox {...restPops}>{children}</FormBox>;
};

Form.LoginWith = function FormLoginWith({ children, ...restPops }) {
  return <LoginWith {...restPops}>{children}</LoginWith>;
};

Form.Overlay = function FormOverlay({ children, ...restPops }) {
  return <Overlay {...restPops}>{children}</Overlay>;
};

Form.Error = function FormError({ children, ...restPops }) {
  return <Error {...restPops}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restPops }) {
  return <Title {...restPops}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restPops }) {
  return <Text {...restPops}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restPops }) {
  return <TextSmall {...restPops}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restPops }) {
  return <Link {...restPops}>{children}</Link>;
};

Form.ImgIcon = function FormImgIcon({ src, children, ...restPops }) {
  return <ImgIcon src={src} {...restPops} />;
};

Form.Input = function FormInput({ children, ...restPops }) {
  return <Input {...restPops}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restPops }) {
  return <Submit {...restPops}>{children}</Submit>;
};

Form.PickerFile = function FormPickerFile({ children, ...restPops }) {
  return <PickerFile {...restPops}>{children}</PickerFile>;
};

Form.Preview = function FormPreview({ children, ...restPops }) {
  return <Preview {...restPops}>{children}</Preview>;
};

Form.TitlePreview = function FormTitlePreview({ children, ...restPops }) {
  return <TitlePreview {...restPops}>{children}</TitlePreview>;
};

Form.SubTitlePreview = function FormSubTitlePreview({ children, ...restPops }) {
  return <SubTitlePreview {...restPops}>{children}</SubTitlePreview>;
};

Form.ImgaePreview = function FormImgaePreview({ ...restPops }) {
  return <ImagePreview {...restPops} />;
};

Form.ItemValueSelected = function FormItemValueSelected({
  children,
  ...restPops
}) {
  return <ItemValueSelected {...restPops}>{children}</ItemValueSelected>;
};

Form.Wrapper = function FormWrapper({ children, ...restPops }) {
  return <Wrapper {...restPops}>{children}</Wrapper>;
};
