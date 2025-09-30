import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import OnboardingCarousel from "../screens/Onboarding";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Search from "../screens/Search";
import Details from "../screens/Details";
import BookNow from "../screens/BookNow";
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Onboarding: undefined;
  Signup: undefined;
  Login: undefined;
  Search: undefined;
  Tabs: undefined;
  Details: { hotel: any };
  BookNow: { hotel: any };
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
      <Stack.Screen name="Tabs" component={BottomTabsNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="BookNow" component={BookNow} />
    </Stack.Navigator>
  );
}
