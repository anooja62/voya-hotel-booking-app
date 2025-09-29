import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingCarousel from "../screens/Onboarding";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingCarousel} />

      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
