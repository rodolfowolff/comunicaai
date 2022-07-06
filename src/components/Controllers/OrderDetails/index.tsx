import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

import { useTheme } from "styled-components/native";
import { Load } from "@components/Animations/Load";
import { Input } from "../Input";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  TitleInput,
  ButtonBack,
  ButtonDelete,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import { ContainerCards } from "@components/Forms/OrderForm/styles";
import { SectionCard } from "../SectionCard";
import { TextArea } from "../TextArea";

export function OrderDetails({ data }: any) {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState(data?.data?.description);
  const [sector, setSector] = useState(data?.data?.sector);
  const [responsible, setResponsible] = useState(data?.data?.responsible);
  const [status, setStatus] = useState(data?.data?.status);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const handleDelete = () => {
    setIsLoading(true);

    setTimeout(() => {
      firestore()
        .collection("orders")
        .doc(data?.data?.id)
        .delete()
        .then(() => {
          navigate("home");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);

    return;
  };

  const handleEdit = () => {
    setIsLoading(true);

    setTimeout(() => {
      firestore()
        .collection("orders")
        .doc(data?.data?.id)
        .update({
          description,
          sector,
          responsible,
          status,
        })
        .then(() => {
          navigate("home");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);

    return;
  };

  return (
    <Container>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <Header>
            <ButtonBack onPress={() => navigate("home")}>
              <MaterialIcons
                name="arrow-back-ios"
                size={22}
                color={COLORS.WHITE}
                style={{ marginLeft: 7 }}
              />
            </ButtonBack>
            <Title>Editar chamado</Title>
            <ButtonDelete onPress={() => handleDelete()}>
              <MaterialIcons
                name="delete-outline"
                size={26}
                color={COLORS.WHITE}
              />
            </ButtonDelete>
          </Header>

          <TitleInput>Descrição</TitleInput>
          <TextArea
            value={description}
            placeholder="Escreva aqui o chamado"
            onChangeText={setDescription}
            onChangeText={(text) => setDescription(text)}
          />

          <TitleInput>Responsável</TitleInput>
          <Input
            placeholder={data?.data?.responsible}
            value={responsible}
            onChangeText={(text) => setResponsible(text)}
          />

          <ContainerCards>
            {[
              {
                title: "Datashow",
                backgroundColor:
                  sector !== "Datashow" ? "BACKGROUND" : "PRIMARY",
                borderColor: sector !== "Datashow" ? "SECONDARY" : null,
                isLoading: isLoading,
                iconName: "videocamera",
                iconSize: 32,
                iconColor: sector !== "Datashow" ? "SECONDARY" : "BACKGROUND",
                onPress: () => setSector("Datashow"),
                textColor: sector !== "Datashow" ? "SECONDARY" : "BACKGROUND",
              },
              {
                title: "Comunicação",
                backgroundColor:
                  sector !== "Comunicação" ? "BACKGROUND" : "PRIMARY",
                borderColor: sector !== "Comunicação" ? "SECONDARY" : null,
                isLoading: isLoading,
                iconName: "notification",
                iconSize: 34,
                iconColor:
                  sector !== "Comunicação" ? "SECONDARY" : "BACKGROUND",
                onPress: () => setSector("Comunicação"),
                textColor:
                  sector !== "Comunicação" ? "SECONDARY" : "BACKGROUND",
              },
              {
                title: "Atalaia",
                backgroundColor:
                  sector !== "Atalaia" ? "BACKGROUND" : "PRIMARY",
                borderColor: sector !== "Atalaia" ? "SECONDARY" : null,
                isLoading: isLoading,
                iconName: "Safety",
                iconSize: 34,
                iconColor: sector !== "Atalaia" ? "SECONDARY" : "BACKGROUND",
                onPress: () => setSector("Atalaia"),
                textColor: sector !== "Atalaia" ? "SECONDARY" : "BACKGROUND",
              },
              {
                title: "BolaCare/Brigada",
                backgroundColor:
                  sector !== "BolaCare/Brigada" ? "BACKGROUND" : "PRIMARY",
                borderColor: sector !== "BolaCare/Brigada" ? "SECONDARY" : null,
                isLoading: isLoading,
                iconName: "medicinebox",
                iconSize: 34,
                iconColor:
                  sector !== "BolaCare/Brigada" ? "SECONDARY" : "BACKGROUND",
                onPress: () => setSector("BolaCare/Brigada"),
                textColor:
                  sector !== "BolaCare/Brigada" ? "SECONDARY" : "BACKGROUND",
              },
            ].map((item) => (
              <SectionCard
                key={item.title}
                title={item.title}
                backgroundColor={item.backgroundColor}
                borderColor={item.borderColor}
                isLoading={item.isLoading}
                iconName={item.iconName}
                iconSize={item.iconSize}
                iconColor={item.iconColor}
                onPress={item.onPress}
                textColor={item.textColor}
              />
            ))}
          </ContainerCards>

          <Button
            title="SALVAR ALTERAÇÕES"
            isLoading={isLoading}
            onPress={() => handleEdit()}
          />
        </>
      )}
    </Container>
  );
}
