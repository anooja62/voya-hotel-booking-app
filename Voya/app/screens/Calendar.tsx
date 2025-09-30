import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CustomHeader from "../components/custom/CustomHeader";
import { Theme } from "../constants/theme";
const Calendar = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  type CalendarProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;
  const navigation = useNavigation<CalendarProp>();
  const bookings = [
    {
      id: "1",
      name: "Elysium Gardens",
      location: "Paris, France",
      price: "$349,7",
      checkIn: "10/07/25",
      checkOut: "10/07/25",
      image: require("../../assets/images/hotel/hotel1.jpeg"),
    },
    {
      id: "2",
      name: "Elysium Gardens",
      location: "Paris, France",
      price: "$349,7",
      checkIn: "10/07/25",
      checkOut: "10/07/25",
      image: require("../../assets/images/hotel/hotel2.jpeg"),
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Top Row: Image + Info */}
      <View style={styles.topRow}>
        <Image source={item.image} style={styles.image} />
        <View style={{ flex: 1 }}>
          <CustomText style={styles.name}>{item.name}</CustomText>
          <CustomText style={styles.location}>{item.location}</CustomText>
        </View>
      </View>

      {/* Dates + Price Row */}
      <View style={styles.datePriceRow}>
        <View style={styles.dateGroup}>
          <View>
            <CustomText style={styles.dateText}>{item.checkIn}</CustomText>
            <CustomText style={styles.subText}>Check In</CustomText>
          </View>
          <View style={{ marginLeft: 20 }}>
            <CustomText style={styles.dateText}>{item.checkOut}</CustomText>
            <CustomText style={styles.subText}>Check Out</CustomText>
          </View>
        </View>
        <View style={styles.priceRow}>
          <CustomText style={styles.price}>{item.price}</CustomText>
          <CustomText style={styles.month}>/month</CustomText>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.cancelBtn, styles.actionBtn]}>
          <CustomText style={styles.cancelText}>Cancel</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.receiptBtn, styles.actionBtn]}
          onPress={() => navigation.navigate("Receipt", { mode: "receipt" })}
        >
          <CustomText style={styles.receiptText}>E-Receipt</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader title="My Booking" />
      {/* Tabs */}
      <View style={styles.tabs}>
        {["Upcoming", "Completed", "Cancelled"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <CustomText
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </CustomText>
            {activeTab === tab && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Booking List */}
      {bookings.filter((b) => activeTab === "Upcoming").length > 0 ? (
        <FlatList
          data={activeTab === "Upcoming" ? bookings : []}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="calendar-outline" size={60} color={Theme.gray} />
          {activeTab === "Completed" && (
            <>
              <CustomText style={styles.emptyTitle}>
                No Completed Trips
              </CustomText>
              <CustomText style={styles.emptySubtitle}>
                Finish your bookings to see them here!
              </CustomText>
            </>
          )}
          {activeTab === "Cancelled" && (
            <>
              <CustomText style={styles.emptyTitle}>
                No Cancelled Trips
              </CustomText>
              <CustomText style={styles.emptySubtitle}>
                Your cancelled bookings will appear here.
              </CustomText>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    marginBottom: 12,
  },
  tabText: {
    fontSize: 16,
    paddingVertical: 8,
    color: "#181818",
    fontWeight: "600",
    fontFamily: Theme.semiBold,
  },
  activeTabText: {
    color: Theme.primary,
    fontWeight: "700",
    fontFamily: Theme.bold,
  },
  activeLine: {
    height: 2,
    backgroundColor: "#4A6CF7",
    marginTop: -2,
  },
  card: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181818",
    fontFamily: Theme.bold,
  },
  location: {
    fontSize: 14,
    color: Theme.gray,
    fontWeight: "400",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  month: {
    fontSize: 13,
    fontWeight: "500",
    color: Theme.gray,
    marginLeft: 2,
    fontFamily: Theme.medium,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    fontFamily: Theme.semiBold,
  },
  datePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  dateGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  dateText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
    fontFamily: Theme.semiBold,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginVertical: 10,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
  },

  subText: {
    fontSize: 10,
    color: Theme.gray,
    fontWeight: "600",
    fontFamily: " Poppins_600SemiBold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  cancelBtn: {
    backgroundColor: "#EFF3FE",
  },
  cancelText: {
    color: Theme.primary,
    fontWeight: "600",
    fontSize: 16,
    fontFamily: Theme.semiBold,
  },
  receiptBtn: {
    backgroundColor: Theme.primary,
  },
  receiptText: {
    color: "#F9F9F9",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: Theme.bold,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181818",
    marginTop: 12,
    fontFamily: Theme.bold,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Theme.gray,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 30,
    fontFamily: Theme.medium,
  },
});
