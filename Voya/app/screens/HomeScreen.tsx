// screens/HomeScreen.tsx
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";

export default function HomeScreen() {
  type HomeNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={styles.container}>
      {/* Top Half - Image with overlay */}
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/images/home/homebg.png")}
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
              style={{ color: "#4F6DFF", fontFamily: "Poppins_400Regular" }}
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

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <CustomText style={styles.registerText}>Register</CustomText>
          </TouchableOpacity>
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
  container: { flex: 1, backgroundColor: "#fff" },

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
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#4B75E9",
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },

  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins-Regular",
  },

  loginText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10, // a little space from screen edge
  },
  loginLink: {
    color: "#4F6DFF",
    fontWeight: "700",
    fontFamily: "Poppins-Regular",
  },
});
