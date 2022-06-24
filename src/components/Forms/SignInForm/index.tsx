import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FooterButton } from "../../../components/Controllers/FooterButton";
import { Button } from "../../../components/Controllers/Button";
import { Input } from "../../../components/Controllers/Input";
import { Form, Title, SubTitle, Footer } from "./styles";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);
  }

  function handleForgotPassword() {}

  return (
    <Form>
      <Title>COMUNICA AI</Title>
      <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="ENTRAR" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <FooterButton
          title="Criar conta"
          icon="person-add"
          onPress={() => navigation.navigate("register")}
        />
        <FooterButton
          title="Esqueci senha"
          icon="email"
          onPress={handleForgotPassword}
        />
      </Footer>
    </Form>
  );
}
