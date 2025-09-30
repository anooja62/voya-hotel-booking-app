import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import PrimaryButton from "../components/custom/PrimaryButton";
import CustomHeader from "../components/custom/CustomHeader";

type BookNowRouteProp = RouteProp<RootStackParamList, "BookNow">;

const BookNow = () => {
  type BookNowProp = NativeStackNavigationProp<RootStackParamList, "BookNow">;
  const navigation = useNavigation<BookNowProp>();
  const route = useRoute<BookNowRouteProp>();
  const { hotel } = route.params;
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const today = new Date();
  const tomorrow = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [guests, setGuests] = useState("1");
  const [isGuestFocused, setIsGuestFocused] = useState(false);
  const [rooms, setRooms] = useState("1");
  const [isRoomFocused, setIsRoomFocused] = useState(false);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  tomorrow.setDate(today.getDate() + 1);

  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);

  const [dateType, setDateType] = useState<"checkin" | "checkout" | null>(null);

  useEffect(() => {
    if (dateModalVisible) {
      const today = new Date();
      setSelectedDate(today.getDate());
      setCurrentMonth(today.getMonth());
      setCurrentYear(today.getFullYear());
    }
  }, [dateModalVisible]);

  // State for dropdowns
  const [roomType, setRoomType] = useState("Economy Room");
  const [payment, setPayment] = useState("5698 ***** **** 2317");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"room" | "payment" | null>(null);

  const roomOptions = ["Economy Room", "Deluxe Room", "Suite"];

  const openModal = (type: "room" | "payment") => {
    setModalType(type);
    setModalVisible(true);
  };

  const selectOption = (value: string) => {
    if (modalType === "room") setRoomType(value);
    if (modalType === "payment") setPayment(value);
    setModalVisible(false);
  };
  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);

    if (dateType === "checkin") {
      setCheckInDate(newDate);

      if (checkOutDate <= newDate) {
        const adjusted = new Date(newDate);
        adjusted.setDate(adjusted.getDate() + 1);
        setCheckOutDate(adjusted);
      }
    } else if (dateType === "checkout") {
      if (newDate > checkInDate) {
        setCheckOutDate(newDate);
      } else {
        alert("Checkout must be after check-in");
      }
    }

    setDateModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Booking Info" />
      <View style={styles.hotelCard}>
        <Image source={hotel.image} style={styles.hotelImage} />

        <View style={styles.hotelInfo}>
          {/* Name + Rating in one row */}
          <View style={styles.nameRow}>
            <CustomText style={styles.hotelName}>{hotel.name}</CustomText>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <CustomText style={styles.rating}>{hotel.rating}</CustomText>
            </View>
          </View>

          <CustomText style={styles.location}>{hotel.location}</CustomText>

          <CustomText style={styles.price}>
            $349,7 <CustomText style={styles.per}>/month</CustomText>
          </CustomText>
        </View>
      </View>

      {/* Divider line */}
      <View style={styles.divider} />

      {/* Booking Options */}
      <View style={styles.options}>
        {/* Dates */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.optionBoxFull}
            onPress={() => {
              setDateType("checkin");
              setDateModalVisible(true);
            }}
          >
            <Ionicons name="calendar-outline" size={18} color="#000" />
            <CustomText style={styles.optionText}>
              {checkInDate ? checkInDate.toLocaleDateString() : "Select Date"}
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionBoxFull}
            onPress={() => {
              setDateType("checkout");
              setDateModalVisible(true);
            }}
          >
            <Ionicons name="calendar-outline" size={18} color="#000" />
            <CustomText style={styles.optionText}>
              {checkOutDate ? checkOutDate.toLocaleDateString() : "Select Date"}
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={[styles.optionBox, { marginRight: 12 }]}>
            <Ionicons name="person-outline" size={18} color="#000" />
            <TextInput
              value={
                isGuestFocused
                  ? guests // when typing → just the number
                  : guests
                  ? `${guests} ${parseInt(guests) > 1 ? "Guests" : "Guest"}`
                  : ""
              }
              onChangeText={(text) => {
                const num = text.replace(/[^0-9]/g, ""); // allow only numbers
                setGuests(num);
              }}
              keyboardType="numeric"
              style={styles.input}
              placeholder="Guests"
              placeholderTextColor="#A2A5AD"
              onFocus={() => setIsGuestFocused(true)}
              onBlur={() => setIsGuestFocused(false)}
            />
          </View>
          <View style={styles.optionBox}>
            <Ionicons name="bed-outline" size={18} color="#000" />
            <TextInput
              value={
                isRoomFocused
                  ? rooms
                  : rooms
                  ? `${rooms} ${parseInt(rooms) > 1 ? "Rooms" : "Room"}`
                  : ""
              }
              onChangeText={(text) => {
                const num = text.replace(/[^0-9]/g, "");
                setRooms(num);
              }}
              keyboardType="numeric"
              style={styles.input}
              placeholder="Rooms"
              placeholderTextColor="#A2A5AD"
              onFocus={() => setIsRoomFocused(true)}
              onBlur={() => setIsRoomFocused(false)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.optionBoxFull}
          onPress={() => openModal("room")}
        >
          <Ionicons name="home-outline" size={18} color="#000" />
          <CustomText style={styles.optionText}>{roomType}</CustomText>
          <Ionicons
            name="chevron-down"
            size={18}
            color="#000"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionBoxFull}
          onPress={() => openModal("payment")}
        >
          <Ionicons name="card-outline" size={18} color="#000" />
          <CustomText style={styles.optionText}>{payment}</CustomText>
          <Ionicons
            name="chevron-down"
            size={18}
            color="#000"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Continue"
          onPress={() => navigation.navigate("GuestInfo")}
          style={{ width: "100%" }}
        />
      </View>

      <Modal
        transparent
        visible={modalVisible && modalType === "room"}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <FlatList
              data={roomOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => selectOption(item)}
                >
                  <CustomText style={{ fontSize: 16 }}>{item}</CustomText>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <Modal
        transparent
        visible={dateModalVisible}
        animationType="slide"
        onRequestClose={() => setDateModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.calendarModal}>
            {/* Header */}
            <View style={styles.calendarHeader}>
              <CustomText style={styles.calendarTitle}>Select Date</CustomText>
              <TouchableOpacity onPress={() => setDateModalVisible(false)}>
                <Ionicons name="close" size={22} />
              </TouchableOpacity>
            </View>

            {/* Month Selector */}
            <View style={styles.monthRow}>
              <TouchableOpacity
                onPress={() =>
                  setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
                }
              >
                <Ionicons name="chevron-back" size={20} />
              </TouchableOpacity>
              <CustomText style={styles.monthText}>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}{" "}
                - {currentYear}
              </CustomText>
              <TouchableOpacity
                onPress={() =>
                  setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
                }
              >
                <Ionicons name="chevron-forward" size={20} />
              </TouchableOpacity>
            </View>

            {/* Week Days */}
            <View style={styles.weekRow}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <CustomText key={day} style={styles.weekDay}>
                  {day}
                </CustomText>
              ))}
            </View>

            <View style={styles.daysGrid}>
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;

                const isPast =
                  currentYear < today.getFullYear() ||
                  (currentYear === today.getFullYear() &&
                    currentMonth < today.getMonth()) ||
                  (currentYear === today.getFullYear() &&
                    currentMonth === today.getMonth() &&
                    day < today.getDate());

                const isSelected = day === selectedDate && !isPast;

                return (
                  <TouchableOpacity
                    key={day}
                    style={[
                      styles.dayBox,
                      isSelected && styles.daySelected,
                      isPast && styles.disabledDay,
                    ]}
                    disabled={isPast}
                    onPress={() => {
                      if (!isPast) {
                        setSelectedDate(day);
                        handleDateSelect(day);
                      }
                    }}
                  >
                    <CustomText
                      style={[
                        styles.dayText,
                        isSelected && { color: "#fff", fontWeight: "400" },
                        isPast && styles.disabledDayText,
                      ]}
                    >
                      {day}
                    </CustomText>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Continue Button */}
            <PrimaryButton
              title="Continue"
              onPress={() => setDateModalVisible(false)}
              style={{ marginTop: 16 }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        visible={modalVisible && modalType === "payment"}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.paymentModal}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <CustomText style={styles.modalTitle}>Payment Methods</CustomText>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} />
              </TouchableOpacity>
            </View>

            {/* Cash Option */}
            <CustomText style={styles.sectionLabel}>Cash</CustomText>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => {
                setPayment("Cash");
                setModalVisible(false);
              }}
            >
              <Ionicons name="cash-outline" size={20} color="#4A6CF7" />
              <CustomText style={styles.optionText}>Cash</CustomText>
              <View style={styles.radioCircle}>
                {payment === "Cash" && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>

            {/* More Options */}
            <CustomText style={styles.sectionLabel}>
              More Payment Options
            </CustomText>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => {
                setPayment("Mastercard");
                setModalVisible(false);
              }}
            >
              <Image
                source={require("../../assets/images/mastercard.png")}
                style={styles.cardIcon}
              />
              <CustomText style={styles.optionText}>Mastercard</CustomText>
              <View style={styles.radioCircle}>
                {payment === "Mastercard" && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>

            {/* Add New Card */}
            <TouchableOpacity
              style={styles.addCardBtn}
              onPress={() => {
                setModalVisible(false); // close modal first
                navigation.navigate("AddCard"); // navigate to AddCard screen
              }}
            >
              <Ionicons name="add" size={18} color="#4A6CF7" />
              <CustomText style={styles.addCardText}>Add New Card</CustomText>
            </TouchableOpacity>

            {/* Continue Button */}
            <PrimaryButton
              title="Continue"
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 16 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", padding: 16 },

  disabledDay: {
    backgroundColor: "transparent",
    opacity: 0.4,
  },

  disabledDayText: {
    color: "#A2A5AD",
  },

  backButton: {
    position: "absolute",
    left: 10,
    top: 40,

    padding: 8,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },

  hotelInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  hotelCard: {
    flexDirection: "row",
    //padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    paddingBottom: 12,
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
  hotelName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181818",
    fontFamily: " Poppins_600SemiBold",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "400",

    color: "#000",
  },

  location: { fontSize: 12, color: "#A2A5AD", marginVertical: 2 },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    fontFamily: " Poppins_600SemiBold",
  },
  per: {
    fontSize: 12,
    fontWeight: "400",
    color: "#888",
    fontFamily: " Poppins_600SemiBold",
  },

  rating: { fontSize: 12, marginLeft: 4 },

  options: { marginBottom: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  optionBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FF",
    padding: 14,
    borderRadius: 12,
  },
  optionBoxFull: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  footer: { marginTop: "auto", marginBottom: 20 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "40%",
  },
  modalOption: {
    paddingVertical: 12,
  },
  calendarModal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  calendarTitle: { fontSize: 16, fontWeight: "700" },

  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  monthText: { fontSize: 16, fontWeight: "600" },

  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  weekDay: { width: 30, textAlign: "center", fontSize: 12, color: "#888" },

  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  dayBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderRadius: 20,
  },

  dayText: {
    fontSize: 14,
    color: "#000",
  },

  daySelected: { backgroundColor: "#4A6CF7" },
  paymentModal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    marginTop: 12,
    marginBottom: 6,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FF",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 8,
    //flex: 1,
    color: "#000",
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  cardIcon: { width: 24, height: 18, resizeMode: "contain", marginRight: 8 },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#4A6CF7",
    justifyContent: "center",
    alignItems: "center",
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4A6CF7",
  },
  addCardBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F7FF",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  addCardText: {
    fontSize: 14,
    color: "#4A6CF7",
    fontWeight: "600",
    marginLeft: 6,
    fontFamily: "Poppins_600SemiBold",
  },
});
