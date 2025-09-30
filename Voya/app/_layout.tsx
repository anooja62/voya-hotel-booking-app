import React from "react";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import StackNavigator from "./navigation/StackNavigator";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  console.log("loading fonts...", fontsLoaded);

  if (!fontsLoaded) {
    return null; // or <AppLoading /> if using splash screen
  }

  return <StackNavigator />;
}
