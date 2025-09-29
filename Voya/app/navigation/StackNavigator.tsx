import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingCarousel from "../screens/Onboarding";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Search from "../screens/Search";
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Onboarding: undefined;
  Signup: undefined;
  Login: undefined;
  Search: undefined;
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

      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
