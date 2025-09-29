import React from "react";
import AppLoading from "expo-app-loading"; // optional, only for splash until fonts load
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import StackNavigator from "./navigation/StackNavigator";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  console.log("loading fonts...", fontsLoaded);

  if (!fontsLoaded) {
    return null; // or <AppLoading /> if using splash screen
  }

  return <StackNavigator />;
}
