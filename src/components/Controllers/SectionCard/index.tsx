import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { ContentCard, Card, Title } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { IColorsTypes } from "src/theme";

export type CardProps = RectButtonProps & {
  title: string;
  backgroundColor?: IColorsTypes;
  borderColor?: IColorsTypes;
  isLoading?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: IColorsTypes;
  textColor?: IColorsTypes;
};

export function SectionCard({
  title,
  backgroundColor,
  borderColor,
  isLoading = false,
  iconName = "close",
  iconSize = 24,
  iconColor = "BACKGROUND",
  textColor = "BACKGROUND",
  ...rest
}: CardProps) {
  const { COLORS } = useTheme();
  return (
    <ContentCard>
      <Card
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...rest}
      >
        <AntDesign name={iconName} size={iconSize} color={COLORS[iconColor]} />
        <Title textColor={textColor}>{title}</Title>
      </Card>
    </ContentCard>
  );
}
