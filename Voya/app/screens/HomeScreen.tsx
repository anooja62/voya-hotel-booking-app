// screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
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

      {/* Bottom Half - Content */}
      <View style={styles.bottomContainer}>
        <Text style={styles.logo}>
          <Text style={{ color: "#4F6DFF" }}>V</Text>oya
        </Text>
        <Text style={styles.title}>
          Your Perfect Stay is Just a Click Away!
        </Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Lectus dictum ut nunc sodales
          a.
        </Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Top (Image half)
  topContainer: {
    flex: 1,
    position: "relative", // needed for overlay
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // covers the image fully
    backgroundColor: "rgba(255,255,255,0.4)", // white dim overlay (adjust opacity)
  },

  // Bottom (Content half)
  bottomContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { fontSize: 55, fontWeight: "bold", marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },

  registerButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 16,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins-Regular",
  },

  loginText: { fontSize: 14, color: "#000" },
  loginLink: {
    color: "#4F6DFF",
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
});
