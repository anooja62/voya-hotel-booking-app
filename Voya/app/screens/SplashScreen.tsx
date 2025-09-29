import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Brand name */}
      <Text style={styles.brand}>
        <Text style={styles.brandV}>V</Text>
        <Text style={styles.brandRest}>oya</Text>
      </Text>

      {/* Tagline */}
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
