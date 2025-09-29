import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/StackNavigator";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailsRouteProp>();
  const { hotel } = route.params; // 👈 fetch hotel data from navigation

  return (
    <ScrollView style={styles.container}>
      {/* Hotel Image */}
      <View style={styles.imageContainer}>
        <Image source={hotel.image} style={styles.image} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
      </View>

      {/* Hotel Info */}
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <Ionicons name="heart-outline" size={22} color="#4F6DFF" />
        </View>
        <Text style={styles.location}>{hotel.location}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{hotel.rating}</Text>
          <Text style={styles.reviews}>(1,092 Reviews)</Text>
        </View>

        {/* Facilities */}
        <Text style={styles.sectionTitle}>Facilities</Text>
        <View style={styles.facilitiesRow}>
          <View style={styles.facility}>
            <Ionicons name="wifi-outline" size={22} color="#000" />
            <Text style={styles.facilityText}>Wi-Fi</Text>
          </View>
          <View style={styles.facility}>
            <Ionicons name="restaurant-outline" size={22} color="#000" />
            <Text style={styles.facilityText}>Restaurant</Text>
          </View>
          <View style={styles.facility}>
            <Ionicons name="cafe-outline" size={22} color="#000" />
            <Text style={styles.facilityText}>Cafe</Text>
          </View>
          <View style={styles.facility}>
            <Ionicons name="leaf-outline" size={22} color="#000" />
            <Text style={styles.facilityText}>Garden</Text>
          </View>
          <View style={styles.facility}>
            <Ionicons name="barbell-outline" size={22} color="#000" />
            <Text style={styles.facilityText}>Gym</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Lectus dictum ut nunc sodales
          a. Nibh tortor malesuada amet malesuada{" "}
          <Text style={styles.readMore}>Read More</Text>
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>
            $1,500 <Text style={styles.night}>/ Night</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Image
  imageContainer: { position: "relative" },
  image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
    elevation: 2,
  },
  headerTitle: {
    position: "absolute",
    top: 44,
    left: "50%",
    transform: [{ translateX: -30 }],
    fontSize: 16,
    fontWeight: "600",
  },

  // Content
  content: { padding: 16 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hotelName: { fontSize: 20, fontWeight: "700" },
  location: { fontSize: 14, color: "#888", marginBottom: 6 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  rating: { fontSize: 14, fontWeight: "600", marginLeft: 4 },
  reviews: { fontSize: 12, color: "#888", marginLeft: 4 },

  // Facilities
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10 },
  facilitiesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  facility: { alignItems: "center" },
  facilityText: { fontSize: 12, marginTop: 4 },

  // Description
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 20,
  },
  readMore: { color: "#4F6DFF", fontWeight: "600" },

  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  priceLabel: { fontSize: 12, color: "#888" },
  price: { fontSize: 20, fontWeight: "700", color: "#000" },
  night: { fontSize: 14, color: "#888", fontWeight: "400" },
  bookButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  bookText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
