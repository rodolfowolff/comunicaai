import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Form = styled.View`
  /* width: 100%; */
  margin-bottom: 10px;
`;

export const ContainerCards = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;
  /* padding-bottom: ${getBottomSpace() + 10}px; */
`;

export const ContainerDropDown = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-top: 20px;
  margin-bottom: 10px;
`;
