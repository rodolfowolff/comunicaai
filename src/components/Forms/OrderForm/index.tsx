import React, { useState } from "react";
import { Alert } from "react-native";

import firestore from "@react-native-firebase/firestore";

import { Input } from "@components/Controllers/Input";
import { Button } from "@components/Controllers/Button";
import { TextArea } from "@components/Controllers/TextArea";
import { Form } from "./styles";

export function OrderForm() {
  const [sector, setSector] = useState("");
  const [responsible, setResponsible] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Form>
      <Input placeholder="Setor" onChangeText={setSector} />
      <Input placeholder="Responsavel" onChangeText={setResponsible} />
      <TextArea
        placeholder="Escreva aqui o chamdo"
        onChangeText={setDescription}
      />
      <Button
        title="ENVIAR CHAMADO"
        isLoading={isLoading}
        onPress={handleNewOrder}
      />
    </Form>
  );
}
