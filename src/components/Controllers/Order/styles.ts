import styled from "styled-components/native";

export type OrderStyleProps = {
  status: "open" | "closed";
};

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  /* height: 100px; */
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 10px;
  /* justify-content: space-between; */
`;

export const Content = styled.View`
  /* flex: 1; */
  /* width: 100%; */
  /* min-width: 100%; */
  height: 95px;
  /* padding: 5px 65px 0 7px; */
  padding: 5px 10px 0 7px;
  /* margin-right: 80px; */
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Header = styled.View`
  /* flex: 1; */
  width: 90%;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const Status = styled.View<OrderStyleProps>`
  width: 10px;
  height: 94px;
  background-color: ${({ theme, status }) =>
    status === "open" ? theme.COLORS.TERTIARY : theme.COLORS.PRIMARY};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Title = styled.Text`
  /* flex: 1; */
  width: 100%;
  /* justify-content: space-between; */
  /* flex-direction: row; */
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  /* margin-bottom: 18px; */
  height: 48px;
`;

export const Info = styled.View`
  /* flex: 1; */
  /* width: 70%; */
  flex-direction: row;
  /* align-items: center; */
`;

export const Footer = styled.View`
  flex: 1;
  /* width: 95%; */
  height: 18px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;
