// screens/Booking.tsx
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";

const Booking = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Booking Info" />
      {/* Hotel Card */}
      <View style={styles.hotelCard}>
        <Image
          source={require("../../assets/images/details/hotel1.jpg")}
          style={styles.hotelImage}
        />
        <View style={styles.hotelInfo}>
          <CustomText style={styles.hotelName}>Elysium Gardens</CustomText>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <CustomText style={styles.rating}>4.5</CustomText>
          </View>
          <CustomText style={styles.location}>Paris, France</CustomText>
          <CustomText style={styles.price}>
            $349,7 <CustomText style={styles.perMonth}>/month</CustomText>
          </CustomText>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Inputs */}
      <View style={styles.form}>
        {/* Dates */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Ionicons name="calendar-outline" size={18} color="#888" />
            <CustomText style={styles.inputText}>20/07/25</CustomText>
          </View>
          <View style={styles.inputBox}>
            <Ionicons name="calendar-outline" size={18} color="#888" />
            <CustomText style={styles.inputText}>26/07/25</CustomText>
          </View>
        </View>

        {/* Guests / Rooms */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={18} color="#888" />
            <CustomText style={styles.inputText}>1 Guest</CustomText>
          </View>
          <View style={styles.inputBox}>
            <Ionicons name="bed-outline" size={18} color="#888" />
            <CustomText style={styles.inputText}>1 Room</CustomText>
          </View>
        </View>

        {/* Room Type Dropdown */}
        <View style={styles.inputBox}>
          <Ionicons name="home-outline" size={18} color="#888" />
          <CustomText style={styles.inputText}>Economy Room</CustomText>
          <Ionicons
            name="chevron-down"
            size={18}
            color="#888"
            style={{ marginLeft: "auto" }}
          />
        </View>

        {/* Payment Dropdown */}
        <View style={styles.inputBox}>
          <Ionicons name="card-outline" size={18} color="#888" />
          <CustomText style={styles.inputText}>5698 **** **** 2317</CustomText>
          <Ionicons
            name="chevron-down"
            size={18}
            color="#888"
            style={{ marginLeft: "auto" }}
          />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <CustomText style={styles.continueText}>Continue</CustomText>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },

  // Hotel Card
  hotelCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 20,
  },
  hotelImage: { width: 90, height: 90, borderRadius: 12, marginRight: 12 },
  hotelInfo: { flex: 1 },
  hotelName: { fontSize: 16, fontWeight: "700" },
  location: { fontSize: 13, color: "#888", marginVertical: 4 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginVertical: 2 },
  rating: { marginLeft: 4, fontSize: 13, fontWeight: "600" },
  price: { fontSize: 16, fontWeight: "700", color: "#000" },
  perMonth: { fontSize: 13, fontWeight: "400", color: "#888" },

  // Divider
  divider: { height: 1, backgroundColor: "#eee", marginBottom: 20 },

  // Form Inputs
  form: { marginBottom: 30 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    flex: 1,
    marginRight: 8,
  },
  inputText: { fontSize: 14, color: "#333", marginLeft: 8 },

  // Continue Button
  continueButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  continueText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
