import React from 'react';

import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Login_form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Login_form.Error = function Login_formError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Login_form.Base = function Login_formBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Login_form.Title = function Login_formTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Login_form.Text = function Login_formText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Login_form.TextSmall = function Login_formTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Login_form.Link = function Login_formLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Login_form.Input = function Login_formInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Login_form.Submit = function Login_formSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
