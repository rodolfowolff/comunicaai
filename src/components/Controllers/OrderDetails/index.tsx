import React, { useEffect, useState } from "react";

import { useTheme } from "styled-components/native";
import { Load } from "@components/Animations/Load";
import { Input } from "../Input";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonBack, Container, Header, Title, TitleInput } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";

export function OrderDetails({ data }: any) {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <Container>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <Header>
            <ButtonBack onPress={() => goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                size={22}
                color={COLORS.BLACK}
                style={{ marginLeft: 7 }}
              />
            </ButtonBack>
            <Title>Editar chamado</Title>
          </Header>

          <TitleInput>Descrição</TitleInput>
          <Input
            placeholder={data.data.description}
            // onChangeText={setResponsible}
          />

          <TitleInput>Responsável</TitleInput>
          <Input
            placeholder={data.data.responsible}
            // onChangeText={setResponsible}
          />
          <TitleInput>Setor:</TitleInput>
          <Input
            placeholder={data.data.sector}
            // onChangeText={setResponsible}
          />

          <Button
            title="SALVAR ALTERAÇÕES"
            isLoading={isLoading}
            onPress={() => {}}
          />
        </>
      )}
    </Container>
  );
}
