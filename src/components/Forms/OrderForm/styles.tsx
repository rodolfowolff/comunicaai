import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Form = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 24px;
  align-self: center;
`;
