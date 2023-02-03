import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

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

export const ContentFooter = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSingUp2 = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
