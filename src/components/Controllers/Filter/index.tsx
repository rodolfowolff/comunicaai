import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterProps } from "./styles";

type Props = FilterProps &
  TouchableOpacityProps & {
    title: string;
    txtColor?: boolean;
  };

export function Filter({
  title,
  backgroundColor,
  outline,
  txtColor,
  ...rest
}: Props) {
  return (
    <Container backgroundColor={backgroundColor} outline={outline} {...rest}>
      <Title txtColor={txtColor}>{title}</Title>
    </Container>
  );
}
