import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

type SplashNavProp = NativeStackNavigationProp<RootStackParamList, "Splash">;

export default function SplashScreen() {
  const navigation = useNavigation<SplashNavProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>
        <Text style={styles.brandV}>V</Text>
        <Text style={styles.brandRest}>oya</Text>
      </Text>
      <Text style={styles.tagline}>Check-in to comfort</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    fontSize: 40,
    fontWeight: "700",
  },
  brandV: {
    color: "#4B75E9",
  },
  brandRest: {
    color: "#000000",
  },
  tagline: {
    marginTop: 8,
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
  },
});
