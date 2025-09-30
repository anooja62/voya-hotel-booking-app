// screens/HotelListing.tsx
import React from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";
import { Theme } from "../constants/theme";
type HotelListingProp = NativeStackNavigationProp<
  RootStackParamList,
  "HotelsListing"
>;

const hotels = [
  {
    id: "1",
    name: "Elysium Gardens",
    location: "London, England",
    rating: 4.5,
    price: "$1,500",
    image: require("../../assets/images/details/hotel1.jpg"),
  },
  {
    id: "2",
    name: "California, USA",
    location: "London, England",
    rating: 4.5,
    price: "$1,800",
    image: require("../../assets/images/hotel/hotel2.jpeg"),
  },
];

const HotelListing = () => {
  const navigation = useNavigation<HotelListingProp>();

  return (
    <View style={styles.container}>
      <CustomHeader title="Hotels" />
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { hotel: item })}
          >
            {/* Hotel Image */}
            <Image source={item.image} style={styles.image} />
            {/* Rating badge */}
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={14} color={Theme.secondary} />
              <CustomText style={styles.ratingText}>{item.rating}</CustomText>
            </View>

            {/* Info */}
            <CustomText style={styles.name}>{item.name}</CustomText>
            <CustomText style={styles.location}>{item.location}</CustomText>

            <View style={styles.row}>
              <CustomText style={styles.price}>{item.price}</CustomText>
              <CustomText style={styles.month}>/month</CustomText>
              <TouchableOpacity style={{ marginLeft: "auto" }}>
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color={Theme.primary}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HotelListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: Theme.containerPadding,
  },
  card: {
    flex: 1,

    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 4,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  ratingBadge: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    alignItems: "center",
  },

  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "500",
    fontFamily: Theme.medium,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
    color: "#000000",
    fontFamily: Theme.semiBold,
  },
  location: {
    fontSize: 12,
    color: Theme.gray,
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,

    color: "#000",
    fontFamily: Theme.semiBold,
  },
  month: {
    fontSize: 15,
    color: Theme.gray,
    marginLeft: 2,
    fontWeight: "600",
    fontFamily: Theme.semiBold,
  },
});
