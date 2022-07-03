import styled from "styled-components/native";

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
  align-self: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.NORMAL};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  text-align: center;
  margin: 12px 0 24px;
`;
