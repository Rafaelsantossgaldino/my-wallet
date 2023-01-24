import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  padding: 0 12px;
  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(10)}px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
  border: 0;
  flex: 1;
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(8)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
