import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import COLORS from "../src/styles/theme";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  };

  return (
    <ThemeProvider theme={COLORS}>
      
      <View
        style={{
          flex:1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>My Wallett</Text>
      </View>
    </ThemeProvider>
  );
};
export default App;
