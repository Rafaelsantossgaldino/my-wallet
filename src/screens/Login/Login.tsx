import React from "react";
import { KeyboardAvoidingView, Text } from "react-native";

import { Input } from "../../components/Input/Input";
import { ButtonPersonalizado } from "../../components/Button/ButtonPersonalizado";
import { useTheme } from "styled-components";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { Container, ContentHeader, Title, Description, ViewButton,  ContentBody, ContentFooter} from "./styles";


const Login: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <KeyboardAvoidingView>
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
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            iconName="mail-outline"
            keyboardType="email-address"
            placeholder="Digite seu email"
          />

          <Input
            LeftIcon
            RightIcon
            iconSize={25}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            keyboardType="default"
            iconName="lock-closed-outline"
            placeholder="Digite sua senha"
          />

          <ButtonPersonalizado
            title="Entrar"
            variant="primary"
            onPress={() => {}}
            style={{ marginBottom: 20 }}
          />
        </ContentBody>

        <ContentFooter></ContentFooter>
      </Container>
    </KeyboardAvoidingView>
  );
};
export { Login };
