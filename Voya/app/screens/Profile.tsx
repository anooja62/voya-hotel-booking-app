import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../components/custom/CustomText";
import CustomHeader from "../components/custom/CustomHeader";
import { Theme } from "../constants/theme";
const Profile = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Profile" />
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/images/avatar.jpg")}
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <View style={styles.nameRow}>
            <CustomText style={styles.userName}>Wade Warren</CustomText>
            <TouchableOpacity>
              <CustomText style={styles.editText}>Edit</CustomText>
            </TouchableOpacity>
          </View>
          <CustomText style={styles.userEmail}>
            wadewarren123@gmail.com
          </CustomText>
        </View>
      </View>

      {/* Preferences */}
      <CustomText style={styles.sectionTitle}>Preferences</CustomText>
      <View style={styles.sectionBox}>
        <ListItem icon="card-outline" label="Payment Methods" />
        <ListItem icon="cash-outline" label="Currency" />
        <ListItem icon="globe-outline" label="Country" />
      </View>

      {/* Help Center */}
      <CustomText style={styles.sectionTitle}>Help Center</CustomText>
      <View style={styles.sectionBox}>
        <ListItem icon="help-circle-outline" label="FAQs" />
        <ListItem icon="headset-outline" label="Help & Support" />
      </View>
    </View>
  );
};

const ListItem = ({ icon, label }: { icon: any; label: string }) => (
  <TouchableOpacity style={styles.listItem}>
    <Ionicons name={icon} size={20} color="#666" style={{ marginRight: 12 }} />
    <CustomText style={styles.listText}>{label}</CustomText>
    <Ionicons
      name="chevron-forward"
      size={18}
      color="#999"
      style={{ marginLeft: "auto" }}
    />
  </TouchableOpacity>
);

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: 16,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000000",
    fontFamily: Theme.semiBold,
  },
  editText: {
    fontSize: 14,
    color: Theme.primary,
    fontWeight: "500",
    fontFamily: Theme.medium,
  },
  userEmail: {
    fontSize: 12,
    color: Theme.gray,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    fontFamily: Theme.semiBold,
    marginBottom: 8,
    color: "#000000",
  },
  sectionBox: {
    borderRadius: 12,
    marginBottom: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#F5F7FF",
  },
  listText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "600",
    fontFamily: Theme.semiBold,
  },
});
