import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import firestore from "@react-native-firebase/firestore";

import { Load } from "@components/Animations/Load";
import { Filters } from "@components/Controllers/Filters";
import { Order, OrderProps } from "@components/Controllers/Order";
import { Container, Header, Title, Counter } from "./styles";

export function Orders() {
  const [status, setStatus] = useState("open");
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
      .collection("orders")
      .where("status", "==", status)
      .limit(15)
      .onSnapshot((querySnapShot) => {
        let orders = querySnapShot?.docs
          ?.map((doc) => {
            return {
              id: doc?.id,
              createdAt: doc?.data()?.createdAt,
              ...doc?.data(),
            };
          })
          .sort(
            (msg1, msg2) => msg2.createdAt.seconds - msg1.createdAt.seconds
          ) as OrderProps[];
        setOrders(orders || []);
        setIsLoading(false);
      });

    return () => subscribe();
  }, [status]);

  const rederItem = ({ item }: { item: OrderProps }) => <Order data={item} />;

  return (
    <Container>
      <Filters onFilter={setStatus} filterActive={status} />

      <Header>
        <Title>Chamados {status === "open" ? "abertos" : "encerrados"}</Title>
        <Counter>{isLoading ? ".." : orders.length}</Counter>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={orders || []}
          keyExtractor={(item) => item.id}
          renderItem={rederItem}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
}
