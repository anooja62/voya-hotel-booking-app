import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
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
      <CustomText style={styles.brand}>
        <CustomText style={styles.brandV}>V</CustomText>
        <CustomText style={styles.brandRest}>oya</CustomText>
      </CustomText>
      <CustomText style={styles.tagline}>Check-in to comfort</CustomText>
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
