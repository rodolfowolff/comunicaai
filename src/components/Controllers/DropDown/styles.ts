import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const ButtonContent = styled.TouchableOpacity`
  position: absolute;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const ButtonText = styled.TouchableOpacity`
  flex: 1;
  text-align: center;
`;

export const Icon = styled.View`
  margin-right: 10px;
`;

export const TouchableText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.NORMAL};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Item = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 80px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 10px 5px;
  flex-direction: row;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  width: 60%;
  text-align: center;
`;
