import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";

const Favorites = () => {
  const favorites = [
    {
      id: "1",
      name: "Elysium Gardens",
      location: "London, England",
      price: "$1,500",
      rating: "4.5",
      image: require("../../assets/images/hotel/hotel1.jpeg"),
    },
    {
      id: "2",
      name: "Grand Palace Hotel",
      location: "Paris, France",
      price: "$1,800",
      rating: "4.7",
      image: require("../../assets/images/hotel/hotel2.jpeg"),
    },
    {
      id: "3",
      name: "Oceanview Retreat",
      location: "Malibu, USA",
      price: "$2,200",
      rating: "4.6",
      image: require("../../assets/images/hotel/hotel3.jpeg"),
    },
    {
      id: "4",
      name: "Skyline Residences",
      location: "Dubai, UAE",
      price: "$3,000",
      rating: "4.8",
      image: require("../../assets/images/hotel/hotel4.jpeg"),
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Hotel Image */}
      <Image source={item.image} style={styles.image} />
      {/* Rating badge */}
      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <CustomText style={styles.ratingText}>{item.rating}</CustomText>
      </View>

      {/* Info */}
      <CustomText style={styles.name}>{item.name}</CustomText>
      <CustomText style={styles.location}>{item.location}</CustomText>

      <View style={styles.row}>
        <CustomText style={styles.price}>{item.price}</CustomText>
        <CustomText style={styles.month}>/month</CustomText>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Ionicons name="heart" size={20} color="#4B75E9" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={22} color="#000" />
        <CustomText style={styles.headerTitle}>Favorite</CustomText>
        <View style={{ width: 22 }} />
      </View>

      {/* Grid List */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_700Bold",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 4,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
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
    fontFamily: "Poppins_500Medium",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
    color: "#000000",
    fontFamily: "Poppins_600SemiBold",
  },
  location: {
    fontSize: 12,
    color: "#A2A5AD",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,

    color: "#000",
    fontFamily: "Poppins_600SemiBold",
  },
  month: {
    fontSize: 15,
    color: "#A2A5AD",
    marginLeft: 2,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
});
