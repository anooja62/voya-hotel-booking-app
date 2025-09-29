// screens/Onboarding1.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Onboarding2() {
  const slices = [
    require("../../assets/images/onboarding/stay4.png"),
    require("../../assets/images/onboarding/stay5.png"),
    require("../../assets/images/onboarding/stay6.png"),
  ];

  return (
    <View style={styles.container}>
      {/* Image slices */}
      <View style={styles.imageRow}>
        {slices.map((src, i) => (
          <Image key={i} source={src} style={styles.slice} resizeMode="cover" />
        ))}
      </View>

      {/* Text content */}
      <View style={styles.textBlock}>
        <Text style={styles.title}>
          Book Your Dream Hotel in Just a Tap{"\n"}Just a Tap
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Lectus dictum ut nunc sodales
          a. Nibh tortor males
        </Text>
      </View>

      {/* Bottom controls */}
      <View style={styles.bottomRow}>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        {/* Pagination dots */}
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Next button */}
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const SLICE_WIDTH = width * 0.25;
const SLICE_HEIGHT = width * 0.75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slice: {
    width: SLICE_WIDTH,
    height: SLICE_HEIGHT,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  textBlock: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    color: "#A2A5AD",
    lineHeight: 20,
    fontWeight: "500",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skip: {
    fontSize: 16,
    color: "#000",
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#4B75E9",
    width: 20,
    borderRadius: 10,
  },
  nextBtn: {
    backgroundColor: "#4B75E9",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
});
