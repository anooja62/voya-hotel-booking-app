import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";

const GuestInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [booksForOthers, setBooksForOthers] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader title="Guest Info" />
      {/* Input Fields */}
      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={18} color="#A2A5AD" />
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#A2A5AD"
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="mail-outline" size={18} color="#A2A5AD" />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#A2A5AD"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputBox}>
        <CustomText style={{ fontSize: 18, marginRight: 6 }}>🇧🇩</CustomText>
        <CustomText style={{ color: "#000", marginRight: 6 }}>+880</CustomText>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          placeholderTextColor="#A2A5AD"
          keyboardType="phone-pad"
        />
      </View>

      {/* Switch */}
      <View style={styles.switchRow}>
        <CustomText style={styles.switchLabel}>Books for Others</CustomText>
        <Switch
          value={booksForOthers}
          onValueChange={setBooksForOthers}
          trackColor={{ false: "#ccc", true: "#4A6CF7" }}
          thumbColor="#fff"
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn}>
        <CustomText style={styles.continueText}>Continue</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default GuestInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  switchLabel: {
    fontSize: 14,
    color: "#181818",
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  continueBtn: {
    backgroundColor: "#4A6CF7",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
