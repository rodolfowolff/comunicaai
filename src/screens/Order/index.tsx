import React from "react";
// import { Header } from "@components/Layout/Header";

import { Container } from "./styles";
import { OrderDetails } from "@components/Controllers/OrderDetails";

export function Order({ route }: any) {
  const data = route?.params;
  console.log("data no screen orderr: ", data);
  return (
    <Container>
      <OrderDetails data={data} />
    </Container>
  );
}
