import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: getBottomSpace() + 48,
  },
})`
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BackText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-left: 5px;
`;
