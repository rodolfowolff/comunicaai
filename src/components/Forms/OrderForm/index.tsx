import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import firestore from "@react-native-firebase/firestore";

import { Input } from "@components/Controllers/Input";
import { Button } from "@components/Controllers/Button";
import { TextArea } from "@components/Controllers/TextArea";
import { SectionCard } from "@components/Controllers/SectionCard";
import { ContainerCards, ContainerDropDown, Form, Title } from "./styles";
import Dropdown from "@components/Controllers/DropDown";

export function OrderForm() {
  const [sector, setSector] = useState("Datashow");
  const [responsible, setResponsible] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selected, setSelected] = useState(false);
  const data = [
    { label: "Carro", value: "1", iconName: "car" },
    { label: "Ministerio Infantil", value: "2", iconName: "user" },
    { label: "Atalaia", value: "3", iconName: "Safety" },
    { label: "Pertence encontrado", value: "4", iconName: "wallet" },
    { label: "Outros", value: "5", iconName: "ellipsis1" },
  ];

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
      .collection("orders")
      .add({
        sector,
        responsible,
        description,
        status: "open",
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert("Sucesso", "Chamado aberto com sucesso!");
      })
      .catch(() => {
        Alert.alert("Erro", "Erro ao criar o chamado!");
      })
      .finally(() => {
        setSector("");
        setResponsible("");
        setDescription("");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    // console.log("sector", sector);
  }, [sector]);

  return (
    <Form>
      <Title>Selecione o setor em que deseja notificar:</Title>
      <ContainerCards>
        {[
          {
            title: "Datashow",
            backgroundColor: sector !== "Datashow" ? "BACKGROUND" : "PRIMARY",
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
            iconColor: sector !== "Comunicação" ? "SECONDARY" : "BACKGROUND",
            onPress: () => (setSector("Comunicação"), setSelected(false)),
            textColor: sector !== "Comunicação" ? "SECONDARY" : "BACKGROUND",
          },
          {
            title: "Atalaia",
            backgroundColor: sector !== "Atalaia" ? "BACKGROUND" : "PRIMARY",
            borderColor: sector !== "Atalaia" ? "SECONDARY" : null,
            isLoading: isLoading,
            iconName: "Safety",
            iconSize: 34,
            iconColor: sector !== "Atalaia" ? "SECONDARY" : "BACKGROUND",
            onPress: () => (setSector("Atalaia"), setSelected(false)),
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
            onPress: () => (setSector("BolaCare/Brigada"), setSelected(false)),
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

      {/* <Input placeholder="Setor" onChangeText={setSector} /> */}

      {sector === "Datashow" && (
        <ContainerDropDown>
          <Title>Selecione a area do recado:</Title>
          <Dropdown
            label="Clique aqui para selecionar a area"
            data={data}
            onSelect={setSelected}
          />
          {!!selected && (
            <>
              {selected.label === "Carro" && (
                <View style={{ marginBottom: 20, width: "100%" }}>
                  <Title>Modelo:</Title>
                  <Input
                    placeholder="Insira o modelo do carro"
                    onChangeText={setResponsible}
                  />
                  <Title>Cor:</Title>
                  <Input
                    placeholder="Insira a cor do carro"
                    onChangeText={setResponsible}
                  />
                  <Title>Placa:</Title>
                  <Input
                    placeholder="Insira a placa do carro"
                    onChangeText={setResponsible}
                  />
                  <Title>Motivo:</Title>
                  <Input
                    placeholder="Insira o motivo"
                    onChangeText={setResponsible}
                  />
                </View>
              )}

              {selected.label === "Ministerio Infantil" && (
                <View style={{ marginBottom: 20, width: "100%" }}>
                  <Title>Nome da criança:</Title>
                  <Input
                    placeholder="Insira o nome da criança"
                    onChangeText={setResponsible}
                  />
                  <Title>Nome do responsável:</Title>
                  <Input
                    placeholder="Insira o nome do responsável"
                    onChangeText={setResponsible}
                  />
                </View>
              )}

              {selected.label === "Atalaia" && (
                <View style={{ marginBottom: 20, width: "100%" }}>
                  <Title>Descrição do chamado:</Title>
                  <TextArea
                    placeholder="Escreva aqui o chamado"
                    onChangeText={setDescription}
                  />
                </View>
              )}

              {selected.label === "Pertence encontrado" && (
                <View style={{ marginBottom: 20, width: "100%" }}>
                  <Title>Onde foi encontrado:</Title>
                  <Input
                    placeholder="Insira onde foi encontrado o pertence"
                    onChangeText={setResponsible}
                  />
                  <Title>Descrição do pertence:</Title>
                  <TextArea
                    placeholder="Escreva aqui sobre o pertence"
                    onChangeText={setDescription}
                  />
                </View>
              )}

              {selected.label === "Outros" && (
                <View style={{ marginBottom: 20, width: "100%" }}>
                  <Title>Nome do responsavel:</Title>
                  <Input
                    placeholder="Insira o nome do responsavel"
                    onChangeText={setResponsible}
                  />
                  <Title>Area:</Title>
                  <Input
                    placeholder="Insira a area do chamado"
                    onChangeText={setResponsible}
                  />
                  <Title>Descrição:</Title>
                  <TextArea
                    placeholder="Escreva aqui sobre o que seria o chamado"
                    onChangeText={setDescription}
                  />
                </View>
              )}

              <Button
                title="ENVIAR CHAMADO"
                isLoading={isLoading}
                onPress={handleNewOrder}
              />
            </>
          )}
        </ContainerDropDown>
      )}

      {sector !== "" && sector !== "Datashow" && (
        <>
          <Title>Para quem é:</Title>
          <Input placeholder="Responsavel" onChangeText={setResponsible} />

          <Title>Deescreva o chamado:</Title>
          <TextArea
            placeholder="Escreva aqui o chamdo"
            onChangeText={setDescription}
          />
          <Button
            title="ENVIAR CHAMADO"
            isLoading={isLoading}
            onPress={handleNewOrder}
          />
        </>
      )}
    </Form>
  );
}
