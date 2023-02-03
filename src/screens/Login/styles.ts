import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
  align-items: center;
  /* justify-content: center; */
  /* padding: ${RFValue(20)}px; */
  width: 100%;
  margin-left: -10px;
  justify-content: space-between;

`;

export const ViewButton = styled.View`
  flex-direction: row;

`;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View``;

export const Title = styled.Text`
  text-align: center;
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

