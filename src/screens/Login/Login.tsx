import React from "react";
import { SafeAreaView, Text } from "react-native";

import { Input } from "../../components/Input/Input";
import { useTheme } from "styled-components";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { Container, ContentHeader, Title, Description, ViewButton,  ContentBody, ContentFooter} from "./styles";


const Login: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem vindo(a) {"\n"} ao RS Wallet App</Title>

          <Description>Entrar com rede sociais</Description>

          <ViewButton>
            <ButtonSocialGoogle title="Google" />
            <ButtonSocial iconName="facebook" title="Facebook" />
          </ViewButton>
        </ContentHeader>

        <ContentBody>
          <Input
            LeftIcon
            iconSize={25}
            iconName="mail-outline"
            placeholder="Digite seu email"

            />
          <Input
            LeftIcon
            iconSize={25}
            iconName="lock-closed-outline"
            placeholder="Digite sua senha"
          />
        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};
export { Login };
