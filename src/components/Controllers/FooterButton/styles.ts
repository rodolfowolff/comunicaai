import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.NORMAL};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-left: 5px;
`;
