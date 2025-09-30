// screens/HomeScreen.tsx
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import PrimaryButton from "../components/custom/PrimaryButton";
import { Theme } from "../constants/theme";
export default function HomeScreen() {
  type HomeNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={styles.container}>
      {/* Top Half - Image with overlay */}
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/images/home/homebg.webp")}
          style={styles.image}
        />
        <View style={styles.overlay} />
      </View>

      {/* Bottom Half */}
      <View style={styles.bottomContainer}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CustomText style={styles.logo}>
            <CustomText
              style={{ color: Theme.primary, fontFamily: Theme.bold }}
            >
              V
            </CustomText>
            oya
          </CustomText>
          <CustomText style={styles.title}>
            Your Perfect Stay is Just a {"\n"}Click Away!
          </CustomText>
          <CustomText style={styles.subtitle}>
            Discover the best hotels, tailored to your comfort and budget —
            anytime, anywhere.
          </CustomText>

          <PrimaryButton
            title="Register"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>

        {/* Login text fixed at the bottom */}
        <CustomText style={styles.loginText}>
          Already have an account?{" "}
          <CustomText
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </CustomText>
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Theme.background },

  // Top
  topContainer: { flex: 1, position: "relative" },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  // Bottom
  bottomContainer: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 24,
    justifyContent: "space-between", // pushes login text to bottom
    //alignItems: "center",
  },
  logo: {
    fontSize: 55,
    fontWeight: "700",
    marginBottom: 20,
    fontFamily: Theme.bold,
  },
  title: {
    fontSize: Theme.xxlargeText,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: Theme.semiBold,
  },
  subtitle: {
    fontSize: 15,
    color: Theme.gray,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: Theme.medium,
  },

  loginText: {
    fontSize: 14,
    color: Theme.textblack,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-500Medium",
  },
  loginLink: {
    color: "#4F6DFF",
    fontWeight: "700",

    fontFamily: Theme.bold,
  },
});
