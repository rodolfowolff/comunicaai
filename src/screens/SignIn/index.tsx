import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { Form } from "../../components/Forms/SignInForm";
import { Container, Content, SubTitle } from "./styles";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <SignInForm />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
