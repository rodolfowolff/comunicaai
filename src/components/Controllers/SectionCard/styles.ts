import styled from "styled-components/native";
import { IColorsTypes } from "src/theme";

export type IColorTypes = {
  width: string;
  height: string;
  margin: number;
  backgroundColor?: IColorsTypes;
  borderColor?: IColorsTypes;
  textColor?: IColorsTypes;
};

export const ContentCard = styled.View<IColorTypes>`
  width: ${({ width }) => (width ? width : "80px")};
  height: ${({ height }) => (height ? height : "75px")};
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : 0) + "px"};
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
`;

export const Title = styled.Text<IColorTypes>`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme, textColor }) => textColor && theme.COLORS[textColor]};
  text-align: center;
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TERTIARY,
}))``;
