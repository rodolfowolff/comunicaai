import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { SignInForm } from "@components/Forms/SignInForm";
import { Container, Content } from "./styles";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <SignInForm />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
