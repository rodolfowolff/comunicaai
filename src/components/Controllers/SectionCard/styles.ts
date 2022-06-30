import styled from "styled-components/native";
import { IColorsTypes } from "src/theme";

export type IColorTypes = {
  backgroundColor?: IColorsTypes;
  borderColor?: IColorsTypes;
  textColor?: IColorsTypes;
};

export const ContentCard = styled.View<IColorTypes>`
  width: 170px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Card = styled.TouchableOpacity<IColorTypes>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.COLORS[backgroundColor]};
  border: ${({ theme, borderColor }) =>
    borderColor ? `1px solid ${theme.COLORS[borderColor]}` : "none"};
  border-radius: 5px;
`;

export const Title = styled.Text<IColorTypes>`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme, textColor }) => textColor && theme.COLORS[textColor]};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TERTIARY,
}))``;
