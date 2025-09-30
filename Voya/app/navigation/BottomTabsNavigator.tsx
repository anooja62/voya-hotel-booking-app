// navigation/BottomTabsNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import Search from "../screens/Search";

import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

import Settings from "../screens/Settings";
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Settings") iconName = "settings-outline";
          else if (route.name === "Favorites") iconName = "heart-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4F6DFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Favorites" component={Favorites} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
