import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../constants/theme";
import { CustomText } from "../components/custom/CustomText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "one",
    title: "Find Your Perfect Stay,\nAnytime, Anywhere",
    description:
      "Browse thousands of hotels and stays worldwide and find the perfect spot for your next adventure, anytime and anywhere.",
    images: [
      require("../../assets/images/onboarding/stay1.png"),
      require("../../assets/images/onboarding/stay2.png"),
      require("../../assets/images/onboarding/stay3.png"),
    ],
  },
  {
    key: "two",
    title: "Book Your Dream Hotel \nin Just a Tap Just a Tap",
    description:
      "Reserve your favorite hotel in seconds with just a tap — fast, easy, and hassle-free booking.",
    images: [
      require("../../assets/images/onboarding/stay4.png"),
      require("../../assets/images/onboarding/stay5.png"),
      require("../../assets/images/onboarding/stay6.png"),
    ],
  },
  {
    key: "three",
    title: "Relax and enjoy your trip \nwith Voya",
    description:
      "Sit back and enjoy your journey — we take care of everything so you can focus on making memories.",
    images: [
      require("../../assets/images/onboarding/stay7.png"),
      require("../../assets/images/onboarding/stay8.png"),
      require("../../assets/images/onboarding/stay9.png"),
    ],
  },
];
export default function OnboardingCarousel() {
  const flatRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  type OnboardingNavProp = NativeStackNavigationProp<
    RootStackParamList,
    "Onboarding"
  >;

  const navigation = useNavigation<OnboardingNavProp>();

  useEffect(() => {
    const timer = setInterval(() => {
      const next = index === slides.length - 1 ? slides.length - 1 : index + 1;
      if (next !== index) {
        flatRef.current?.scrollToIndex({ index: next, animated: true });
        setIndex(next);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [index]);
  useEffect(() => {
    if (index === slides.length - 1) {
      // On last slide → navigate after 2s
      const timer = setTimeout(() => {
        navigation.replace("Home");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Auto-slide to next
      const timer = setInterval(() => {
        const next = index + 1;
        flatRef.current?.scrollToIndex({ index: next, animated: true });
        setIndex(next);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [index, navigation]);

  const handleMomentumEnd = (e: any) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(newIndex);
  };

  const handleNext = () => {
    if (index === slides.length - 1) {
      navigation.replace("Home");
    } else {
      flatRef.current?.scrollToIndex({ index: index + 1, animated: true });
      setIndex(index + 1);
    }
  };

  const renderItem = ({ item }: { item: (typeof slides)[0] }) => (
    <View
      style={{
        width,
        flex: 1,
      }}
    >
      <View style={[styles.imageRow, { height: height * 0.5 }]}>
        {item.images.map((src, i) => (
          <Image key={i} source={src} style={styles.slice} resizeMode="cover" />
        ))}
      </View>

      <View
        style={[
          styles.textBlock,
          {
            height: height * 0.5,
          },
        ]}
      >
        <CustomText style={styles.title}>{item.title}</CustomText>
        <CustomText style={styles.description}>{item.description}</CustomText>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}
      />

      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <CustomText style={styles.skip}>Skip</CustomText>
        </TouchableOpacity>

        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === index && styles.dotActive]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const SLICE_WIDTH = width * 0.25;
const SLICE_HEIGHT = height * 0.5 * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 30,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 0,
  },
  slice: {
    width: SLICE_WIDTH,
    height: SLICE_HEIGHT,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  textBlock: { alignItems: "center", paddingHorizontal: 30 },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    fontFamily: "Poppins-600SemiBold",
    alignItems: "center",
    marginBottom: 10,
    lineHeight: 27,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    color: Theme.gray,
    lineHeight: 27,
    fontWeight: "500",
    fontFamily: Theme.medium,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  skip: { fontSize: 16, color: "#000" },
  dots: { flexDirection: "row", alignItems: "center" },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: Theme.primary, width: 20, borderRadius: 10 },
  nextBtn: {
    backgroundColor: Theme.primary,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: { color: "#fff", fontSize: 22, fontWeight: "600" },
});
