import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/custom/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false); // ✅ Success modal state
  const navigation = useNavigation();

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0 = Jan
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Card</Text>
          <View style={{ width: 22 }} />
        </View>

        {/* Card Preview */}
        <View style={styles.cardPreview}>
          <Text style={styles.cardNumber}>
            {cardNumber
              ? cardNumber.replace(/\d{4}(?=.)/g, "$& ")
              : "5698 **** **** 2317"}
          </Text>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Card Holder Name</Text>
              <Text style={styles.cardValue}>
                {cardHolder || "Wade Warren"}
              </Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>Expiry Date</Text>
              <Text style={styles.cardValue}>{expiryDate || "02/06/30"}</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/mastercard.png")}
            style={styles.cardLogo}
          />
        </View>

        {/* Inputs */}
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={18} color="#A2A5AD" />
          <TextInput
            style={styles.input}
            placeholder="Card Holder"
            placeholderTextColor="#A2A5AD"
            value={cardHolder}
            onChangeText={setCardHolder}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons name="card-outline" size={18} color="#A2A5AD" />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            placeholderTextColor="#A2A5AD"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputBox, { flex: 1, marginRight: 12 }]}>
            <Ionicons name="calendar-outline" size={18} color="#A2A5AD" />
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => setCalendarVisible(true)}
            >
              <Text
                style={[
                  styles.input,
                  {
                    paddingVertical: 14,
                    color: expiryDate ? "#000" : "#A2A5AD",
                  },
                ]}
              >
                {expiryDate || "Expiry Date"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.inputBox, { flex: 1 }]}>
            <Ionicons name="lock-closed-outline" size={18} color="#A2A5AD" />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              placeholderTextColor="#A2A5AD"
              keyboardType="numeric"
              secureTextEntry
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>
      </ScrollView>

      {/* Sticky Add Card Button */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Add Card"
          onPress={() => setSuccessVisible(true)} // ✅ show success modal
        />
      </View>

      {/* Calendar Modal */}
      <Modal
        visible={calendarVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.calendarModal}>
            {/* Header */}
            <View style={styles.calendarHeader}>
              <Text style={styles.calendarTitle}>Select Expiry Date</Text>
              <TouchableOpacity onPress={() => setCalendarVisible(false)}>
                <Ionicons name="close" size={22} />
              </TouchableOpacity>
            </View>

            {/* Month Selector */}
            <View style={styles.monthRow}>
              <TouchableOpacity
                onPress={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear((prev) => prev - 1);
                  } else {
                    setCurrentMonth((prev) => prev - 1);
                  }
                }}
              >
                <Ionicons name="chevron-back" size={20} />
              </TouchableOpacity>
              <Text style={styles.monthText}>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {currentYear}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear((prev) => prev + 1);
                  } else {
                    setCurrentMonth((prev) => prev + 1);
                  }
                }}
              >
                <Ionicons name="chevron-forward" size={20} />
              </TouchableOpacity>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                setExpiryDate(
                  `${(currentMonth + 1)
                    .toString()
                    .padStart(2, "0")}/${currentYear.toString().slice(-2)}`
                );
                setCalendarVisible(false);
              }}
            >
              <Text style={styles.addBtnText}>Set Expiry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ✅ Success Modal */}
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
          onPressOut={() => setSuccessVisible(false)} // 👈 close on outside press
        >
          <View style={styles.successModal}>
            <View style={styles.iconCircle}>
              <Ionicons name="card-outline" size={32} color="#4A6CF7" />
            </View>
            <Text style={styles.successText}>Successfully added card!</Text>

            <PrimaryButton
              title="Done"
              style={styles.doneBtn}
              onPress={() => {
                setSuccessVisible(false);
                navigation.goBack();
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_700Bold",
  },
  cardPreview: {
    backgroundColor: "#4A6CF7",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    position: "relative",
  },
  cardNumber: { fontSize: 20, color: "#fff", marginBottom: 20 },
  cardRow: { flexDirection: "row", justifyContent: "space-between" },
  cardLabel: { fontSize: 12, color: "#D1D5DB" },
  cardValue: { fontSize: 14, color: "#fff", fontWeight: "500" },
  cardLogo: {
    width: 40,
    height: 30,
    position: "absolute",
    top: 20,
    right: 20,
    resizeMode: "contain",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
    marginHorizontal: 20,
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14, color: "#000" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  footer: { position: "absolute", bottom: 20, left: 20, right: 20 },

  addBtn: {
    backgroundColor: "#4A6CF7",
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: "center",
  },
  addBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // 👈 push modal to bottom
    backgroundColor: "rgba(0,0,0,0.4)", // dim background
  },

  successModal: {
    backgroundColor: "#fff",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    width: "100%", // full width bottom sheet
  },

  iconCircle: {
    backgroundColor: "#EEF2FF",
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  doneBtn: {
    width: "100%",
  },

  calendarModal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
  },

  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  calendarTitle: { fontSize: 16, fontWeight: "600" },
  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthText: { fontSize: 16, fontWeight: "500" },
});
