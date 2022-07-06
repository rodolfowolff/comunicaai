import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

import { FooterButton } from "@components/Controllers/FooterButton";
import { Button } from "@components/Controllers/Button";
import { Input } from "@components/Controllers/Input";
import { Form, Title, SubTitle, Footer } from "./styles";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation();

  function handleSignIn() {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch(() => {
        Alert.alert("Erro", "Erro ao logar!");
        setIsLoading(false);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  }

  function handleForgotPassword() {
    if (email === "") {
      Alert.alert("Erro", "Por favor, informe seu e-mail!");
      return;
    }

    setIsLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
        Alert.alert(
          "Sucesso",
          "E-mail enviado com sucesso! Verifique sua caixa de entrada."
        );
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
        Alert.alert("Erro", "Erro ao enviar e-mail!");
      });
  }

  return (
    <Form>
      <Title>ComunicaAí</Title>
      <SubTitle>Seja bem vindo</SubTitle>
      <Input placeholder="E-mail" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="ENTRAR" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <FooterButton
          title="Criar conta"
          icon="person-add"
          onPress={() => navigate("register")}
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
