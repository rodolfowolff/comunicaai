import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
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

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
