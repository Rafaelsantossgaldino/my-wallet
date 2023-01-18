import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

import { Container, ContentHeader, Title, Description, ViewButton,  ContentBody, ContentFooter} from "./styles";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem vindo(a) {"\n"} ao RS WalleApp</Title>

          <Description>Entrar com rede sociais</Description>

          <ViewButton></ViewButton>
        </ContentHeader>

        <ContentBody>

        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};
export { Login };
