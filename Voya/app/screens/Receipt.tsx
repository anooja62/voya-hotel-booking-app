import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";

const Receipt = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={22} color="#000" />
        <CustomText style={styles.headerTitle}>E-Receipt</CustomText>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hotel Info */}
        <View style={styles.hotelCard}>
          <Image
            source={require("../../assets/images/hotel/hotel1.jpeg")}
            style={styles.hotelImage}
          />

          <View style={styles.hotelInfo}>
            {/* Name + Rating in one row */}
            <View style={styles.nameRow}>
              <CustomText style={styles.hotelName}>Elysium Gardens</CustomText>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <CustomText style={styles.rating}>4.5</CustomText>
              </View>
            </View>

            <CustomText style={styles.location}>Paris, France</CustomText>

            <CustomText style={styles.price}>
              $349,7 <CustomText style={styles.per}>/month</CustomText>
            </CustomText>
          </View>
        </View>

        {/* Booking Details */}
        <CustomText style={styles.sectionTitle}>Booking Details</CustomText>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Booking Date & Time</CustomText>
          <CustomText style={styles.value}>04/07/25 | 11:20 AM</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Check IN</CustomText>
          <CustomText style={styles.value}>10/07/25</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Check Out</CustomText>
          <CustomText style={styles.value}>16/07/25</CustomText>
        </View>

        {/* Guest Details */}
        <CustomText style={styles.sectionTitle}>Guest Details</CustomText>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Guest Name</CustomText>
          <CustomText style={styles.value}>Wade Warren</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Guest</CustomText>
          <CustomText style={styles.value}>01</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Room</CustomText>
          <CustomText style={styles.value}>01</CustomText>
        </View>

        {/* Payment Details */}
        <CustomText style={styles.sectionTitle}>Payment Details</CustomText>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Amount</CustomText>
          <CustomText style={styles.value}>$1,500</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Check In</CustomText>
          <CustomText style={styles.value}>$3.15</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Check Out</CustomText>
          <CustomText style={styles.value}>1,503.15</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Payment Methods</CustomText>
          <CustomText style={[styles.value, { color: "#4B75E9" }]}>
            Cash
          </CustomText>
        </View>

        <Image
          source={require("../../assets/images/barcode.png")} // 👈 put your barcode image in assets
          style={styles.barcode}
        />

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, styles.backBtn]}>
            <CustomText style={styles.backText}>Back to Home</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.downloadBtn]}>
            <CustomText style={styles.downloadText}>Download</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  hotelRow: { flexDirection: "row", marginBottom: 20 },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  hotelName: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },

  rating: { fontSize: 13, marginLeft: 4 },
  location: {
    fontSize: 13,
    color: "#A2A5AD",
    marginTop: 2,
    fontFamily: "Poppins_500Medium",
  },
  priceRow: { flexDirection: "row", alignItems: "flex-end", marginTop: 6 },
  price: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  month: { fontSize: 13, color: "#A2A5AD", marginLeft: 2 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8,
    color: "#181818",
    fontFamily: "Poppins_700Bold",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: "#A2A5AD",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 25,
  },
  value: {
    fontSize: 14,
    color: "#000000",
  },
  barcode: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginVertical: 20,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 24,
  },
  backBtn: { backgroundColor: "#EFF3FE" },
  downloadBtn: { backgroundColor: "#4B75E9" },
  backText: {
    color: "#4B75E9",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  downloadText: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  hotelCard: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 20,
  },
  hotelImage: { width: 100, height: 100, borderRadius: 12 },
  hotelInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  per: {
    fontSize: 12,
    fontWeight: "400",
    color: "#888",
    fontFamily: " Poppins_600SemiBold",
  },
});
