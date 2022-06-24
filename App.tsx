import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";
import { ThemeProvider } from "styled-components/native";
import { Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { loadAsync } from "expo-font";
import theme from "./src/theme";

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text style={{ fontFamily: theme.FONTS.SIZES.BOLD }}>
          SplashScreen Demo! 👋
        </Text>
        <Text style={{ fontFamily: theme.FONTS.SIZES.NORMAL }}>
          SplashScreen Demo! 👋
        </Text>
      </View>
    </ThemeProvider>
  );
}
