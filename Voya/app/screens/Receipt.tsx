import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";
import { useRoute, useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/custom/PrimaryButton";
import { Theme } from "../constants/theme";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const Receipt = () => {
  const route = useRoute();
  type ReceiptProp = NativeStackNavigationProp<RootStackParamList, "Receipt">;
  const navigation = useNavigation<ReceiptProp>();
  const [successVisible, setSuccessVisible] = useState(false);

  const { mode } = route.params as { mode: "receipt" | "payment" };

  return (
    <View style={styles.container}>
      <CustomHeader title={mode === "receipt" ? "E-Receipt" : "Booking Info"} />

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
            <View style={styles.nameRow}>
              <CustomText style={styles.hotelName}>Elysium Gardens</CustomText>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color={Theme.secondary} />
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
          <CustomText style={styles.label}>Tax</CustomText>
          <CustomText style={styles.value}>$3.15</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Total</CustomText>
          <CustomText style={styles.value}>$1,503.15</CustomText>
        </View>
        <View style={styles.detailRow}>
          <CustomText style={styles.label}>Payment Method</CustomText>
          <CustomText style={[styles.value, { color: Theme.primary }]}>
            Cash
          </CustomText>
        </View>

        {mode === "receipt" && (
          <>
            <Image
              source={require("../../assets/images/barcode.png")}
              style={styles.barcode}
            />
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.btn, styles.backBtn]}
                onPress={() => navigation.navigate("Tabs")}
              >
                <CustomText style={styles.backText}>Back to Home</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.downloadBtn]}>
                <CustomText style={styles.downloadText}>Download</CustomText>
              </TouchableOpacity>
            </View>
          </>
        )}

        {mode === "payment" && (
          <View style={{ marginTop: 20 }}>
            <PrimaryButton
              title="Pay $259.15"
              onPress={() => setSuccessVisible(true)}
            />
          </View>
        )}
      </ScrollView>

      {/* ✅ Success Modal */}
      <Modal
        visible={successVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setSuccessVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setSuccessVisible(false)}
        >
          <View style={styles.successModal}>
            <View style={styles.iconCircle}>
              <Ionicons name="checkmark-circle" size={60} color="#4A6CF7" />
            </View>
            <Text style={styles.successText}>Payment Successful</Text>

            <PrimaryButton
              title="Done"
              style={styles.doneBtn}
              onPress={() => {
                setSuccessVisible(false);
                navigation.navigate("Receipt", { mode: "receipt" });
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: Theme.containerPadding,
  },
  hotelCard: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  hotelImage: { width: 100, height: 100, borderRadius: 12 },
  hotelInfo: { flex: 1, marginLeft: 12, justifyContent: "space-between" },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hotelName: {
    fontSize: Theme.largeText,
    fontWeight: "600",
    fontFamily: Theme.semiBold,
  },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  rating: { fontSize: 13, marginLeft: 4 },
  location: {
    fontSize: 13,
    color: Theme.gray,
    marginTop: 2,
    fontFamily: Theme.medium,
  },
  price: { fontSize: 18, fontWeight: "600", fontFamily: Theme.semiBold },
  per: {
    fontSize: 12,
    fontWeight: "400",
    color: "#888",
    fontFamily: Theme.semiBold,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8,
    color: Theme.textblack,
    fontFamily: Theme.bold,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: Theme.gray,
    fontWeight: "600",
    fontFamily: Theme.semiBold,
    lineHeight: 25,
  },
  value: { fontSize: 14, color: "#000" },
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
  downloadBtn: { backgroundColor: Theme.primary },
  backText: {
    color: Theme.primary,
    fontWeight: "600",
    fontFamily: Theme.semiBold,
  },
  downloadText: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: Theme.bold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  successModal: {
    backgroundColor: "#fff",
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
  },
  iconCircle: { marginBottom: 12 },
  successText: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 12,
    color: Theme.textblack,
    fontFamily: Theme.bold,
  },
  doneBtn: { marginTop: 12 },
});
