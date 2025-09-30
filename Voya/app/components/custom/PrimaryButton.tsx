import React from "react";
import { CustomText } from "./CustomText";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Theme } from "../../constants/theme";
interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    //marginBottom: 24,
  },
  text: {
    color: "#fff",
    fontSize: Theme.largeText,
    fontWeight: "700",
    fontFamily: Theme.bold,
  },
});
