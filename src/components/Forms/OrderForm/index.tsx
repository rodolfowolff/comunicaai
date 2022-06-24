import React, { useState } from "react";

import { Form, Title } from "./styles";
import { Input } from "@components/Controllers/Input";
import { Button } from "@components/Controllers/Button";
import { TextArea } from "@components/Controllers/TextArea";

export function OrderForm() {
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);
  }

  return (
    <Form>
      <Title>Novo chamado</Title>
      <Input placeholder="Setor" onChangeText={setPatrimony} />
      <Input placeholder="Responsavel" onChangeText={setPatrimony} />
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
