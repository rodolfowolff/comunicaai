import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import { Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import theme from "./src/theme";

export default function App() {
  preventAutoHideAsync().catch(() => {});
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });
  useEffect(() => {
    async function init() {
      if (fontsLoaded) {
        await hideAsync();
      }
    }
    init();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: theme.FONTS.SIZES.BOLD }}>
          SplashScreen Demo! 👋
        </Text>
      </View>
    </ThemeProvider>
  );
}
