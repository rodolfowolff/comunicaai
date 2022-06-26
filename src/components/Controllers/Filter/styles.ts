import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterProps = {
  backgroundColor?: string;
  txtColor?: boolean;
  outline?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterProps>`
  flex: 1;
  align-items: center;
  padding: 10px;
  background-color: ${({ outline, backgroundColor }) =>
    outline ? "transparent" : backgroundColor && backgroundColor};
  border-radius: 5px;
  border: ${({ outline, backgroundColor }) =>
    outline ? `1px solid ${backgroundColor && backgroundColor}` : "none"};
`;

export const Title = styled.Text<FilterProps>`
  font-size: 14px;
  color: ${({ theme, txtColor }) =>
    txtColor ? theme.COLORS.WHITE : theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
