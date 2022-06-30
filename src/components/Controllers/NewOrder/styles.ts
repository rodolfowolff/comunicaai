import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const HeaderBottomSheet = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`;
