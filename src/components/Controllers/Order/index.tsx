import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Load } from "@components/Animations/Load";
import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps,
} from "./styles";

export type OrderProps = OrderStyleProps & {
  id: string;
  sector: string;
  responsible: string;
  description: string;
  status: string;
  createdAt: {
    seconds: number;
  };
};

type Props = {
  data: OrderProps;
};

export function Order({ data }: Props) {
  const theme = useTheme();
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
          <Status status={data.status} />

          <Content>
            <Header>
              <Title>{data.description}</Title>
              <MaterialIcons
                name={
                  data.status === "open" ? "hourglass-empty" : "check-circle"
                }
                size={24}
                color={
                  data.status === "open"
                    ? theme.COLORS.SECONDARY
                    : theme.COLORS.PRIMARY
                }
              />
            </Header>

            <Footer>
              <Info>
                <MaterialIcons
                  name="schedule"
                  size={16}
                  color={theme.COLORS.SUBTEXT}
                />
                <Label>
                  {data?.createdAt?.seconds
                    ? format(
                        new Date(data?.createdAt?.seconds * 1000),
                        "dd/MM/yyyy HH:mm"
                      )
                    : ""}
                </Label>
              </Info>

              <Info>
                <MaterialIcons
                  name="emoji-people"
                  size={16}
                  color={theme.COLORS.SUBTEXT}
                />
                <Label>{data.sector}</Label>
              </Info>
            </Footer>
          </Content>
        </>
      )}
    </Container>
  );
}
