import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomText } from "./CustomText";

interface CustomHeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode; // e.g. a settings icon
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBack = true,
  rightComponent,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 22 }} /> // keeps spacing consistent
      )}

      <CustomText style={styles.title}>{title}</CustomText>

      {rightComponent ? rightComponent : <View style={{ width: 22 }} />}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 65,
    paddingBottom: 25,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#181818",
    fontFamily: "Poppins_700Bold",
  },
});
