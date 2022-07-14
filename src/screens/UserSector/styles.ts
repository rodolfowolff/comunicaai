import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const ContainerSector = styled.View`
  flex: 1;
  /* width: 100%; */
  /* flex-direction: row; */
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
`;

export const Sector = styled.View`
  /* flex: 1; */
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; */
  /* padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px; */
`;

export const FooterButtonSector = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
