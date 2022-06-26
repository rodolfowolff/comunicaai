import React from "react";
import { useTheme } from "styled-components/native";

import { Filter } from "@components/Controllers/Filter";
import { Container, Title, Options } from "./styles";

type Props = {
  onFilter: (status: string) => void;
  filterActive: string;
};

export function Filters({ onFilter, filterActive }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Title>Filtre pelo status do chamado</Title>

      <Options>
        <Filter
          title="Abertos"
          backgroundColor={
            filterActive === "open" ? theme.COLORS.BLACK : theme.COLORS.BORDER
          }
          onPress={() => onFilter("open")}
          txtColor={filterActive === "open" ? true : false}
          outline={filterActive === "open" ? false : true}
        />

        <Filter
          title="Encerrados"
          backgroundColor={
            filterActive === "closed"
              ? theme.COLORS.PRIMARY
              : theme.COLORS.BORDER
          }
          onPress={() => onFilter("closed")}
          txtColor={filterActive === "closed" ? true : false}
          outline={filterActive === "closed" ? false : true}
        />
      </Options>
    </Container>
  );
}
