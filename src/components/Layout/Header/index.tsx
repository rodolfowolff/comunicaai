import React from "react";

import auth from "@react-native-firebase/auth";

import { LogoutButton } from "@components/Controllers/LogoutButton";
import { Container, Greeting, Title, SubTitle } from "./styles";

export function Header() {
  function handleSignOut() {
    //loading(true);
    // limpar o token do usuário
    // localStorage.removeItem("token");
    // sitTimeout(() => {
    //   loading(false);
    auth().signOut();
    // }, 1000);
  }

  return (
    <Container>
      <Greeting>
        <Title>COMUNICA AI</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}
