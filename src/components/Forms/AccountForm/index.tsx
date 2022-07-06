import React, { useState } from "react";
import { Alert } from "react-native";

import auth from "@react-native-firebase/auth";

import { Button } from "@components/Controllers/Button";
import { Input } from "@components/Controllers/Input";
import { Form, Title, SubTitle } from "./styles";

export function AccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
      })
      .catch(() => {
        Alert.alert("Erro", "Erro ao criar usuário!");
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  }

  return (
    <Form>
      <Title>COMUNICA AI</Title>
      <SubTitle>Cadastra-se e tenha acesso ao app</SubTitle>
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="CADASTRAR"
        isLoading={isLoading}
        onPress={handleNewAccount}
      />
    </Form>
  );
}
