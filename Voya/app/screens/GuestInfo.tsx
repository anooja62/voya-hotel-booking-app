import { StyleSheet, View, TextInput, Switch } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";
import PrimaryButton from "../components/custom/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const GuestInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [booksForOthers, setBooksForOthers] = useState(false);
  type GuestProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;
  const navigation = useNavigation<GuestProp>();
  return (
    <View style={styles.container}>
      <CustomHeader title="Guest Info" />

      {/* Content area */}
      <View style={styles.content}>
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
          <CustomText style={{ color: "#000", marginRight: 6 }}>
            +880
          </CustomText>
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
      </View>

      {/* Fixed Bottom Button */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Continue"
          onPress={() => navigation.navigate("Receipt", { mode: "payment" })}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
};

export default GuestInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  content: {
    flex: 1,
    //paddingHorizontal: 20,
  },
  footer: {
    paddingVertical: 20,
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
});
