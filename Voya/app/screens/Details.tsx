import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/StackNavigator";
import PrimaryButton from "../components/custom/PrimaryButton";
import { CustomText } from "../components/custom/CustomText";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailsRouteProp>();
  const { hotel } = route.params;

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hotel Image */}
        <View style={styles.imageContainer}>
          <Image source={hotel.image} style={styles.image} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <CustomText style={styles.headerTitle}>Details</CustomText>
        </View>

        {/* Hotel Info */}
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <CustomText style={styles.hotelName}>{hotel.name}</CustomText>
            <Ionicons name="heart-outline" size={22} color="#4F6DFF" />
          </View>
          <CustomText style={styles.location}>{hotel.location}</CustomText>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <CustomText style={styles.rating}>{hotel.rating}</CustomText>
            <CustomText style={styles.reviews}>(1,092 Reviews)</CustomText>
          </View>

          {/* Facilities */}
          <CustomText style={styles.sectionTitle}>Facilities</CustomText>
          <View style={styles.facilitiesRow}>
            <View style={styles.facility}>
              <Ionicons name="wifi-outline" size={22} color="#000" />
              <CustomText style={styles.facilityText}>Wi-Fi</CustomText>
            </View>
            <View style={styles.facility}>
              <Ionicons name="restaurant-outline" size={22} color="#000" />
              <CustomText style={styles.facilityText}>Restaurant</CustomText>
            </View>
            <View style={styles.facility}>
              <Ionicons name="cafe-outline" size={22} color="#000" />
              <CustomText style={styles.facilityText}>Cafe</CustomText>
            </View>
            <View style={styles.facility}>
              <Ionicons name="leaf-outline" size={22} color="#000" />
              <CustomText style={styles.facilityText}>Garden</CustomText>
            </View>
            <View style={styles.facility}>
              <Ionicons name="barbell-outline" size={22} color="#000" />
              <CustomText style={styles.facilityText}>Gym</CustomText>
            </View>
          </View>

          {/* Description */}
          <CustomText style={styles.sectionTitle}>Description</CustomText>
          <CustomText style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Lectus dictum ut nunc
            sodales a. Nibh tortor malesuada amet malesuada{" "}
            <CustomText style={styles.readMore}>Read More</CustomText>
          </CustomText>
        </View>
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <View>
          <CustomText style={styles.priceLabel}>Price</CustomText>
          <CustomText style={styles.price}>
            $1,500 <CustomText style={styles.night}>/ Night</CustomText>
          </CustomText>
        </View>
        <PrimaryButton
          title="Book Now"
          onPress={() => {}}
          style={{ width: "60%" }}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  scrollContent: { paddingBottom: 100 },
  // Image
  imageContainer: { position: "relative" },
  image: {
    width: "100%",
    height: 400,
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
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "#fff",
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
