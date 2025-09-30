// navigation/BottomTabsNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import Search from "../screens/Search";

import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Calendar from "../screens/Calendar";
import { Theme } from "../constants/theme";
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Calendar") iconName = "calendar-outline";
          else if (route.name === "Favorites") iconName = "heart-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4F6DFF",
        tabBarInactiveTintColor: Theme.gray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Search} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Favorites" component={Favorites} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
