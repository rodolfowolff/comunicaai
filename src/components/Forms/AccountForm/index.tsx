import React, { useState } from "react";
import { Alert } from "react-native";

import { Button } from "../../../components/Controllers/Button";
import { Input } from "../../../components/Controllers/Input";
import { Form, Title, SubTitle } from "./styles";

export function AccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {}

  return (
    <Form>
      <Title>COMUNICA AI</Title>
      <SubTitle>Cadastra-se e tenha acesso ao app</SubTitle>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button
        title="CADASTRAR"
        isLoading={isLoading}
        onPress={handleNewAccount}
      />
    </Form>
  );
}
