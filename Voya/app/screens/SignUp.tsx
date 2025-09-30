import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import PrimaryButton from "../components/custom/PrimaryButton";
import { Theme } from "../constants/theme";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  type SignUpProp = NativeStackNavigationProp<RootStackParamList, "Signup">;
  const navigation = useNavigation<SignUpProp>();
  return (
    <View style={styles.container}>
      {/* Top content centered */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <CustomText style={styles.title}>Let’s Get Started</CustomText>
        <CustomText style={styles.subtitle}>
          Create an account to continue.
        </CustomText>

        {/* Inputs */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter Full name"
            style={styles.input}
            placeholderTextColor={Theme.gray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter email address"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={Theme.gray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Create Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
            placeholderTextColor={Theme.gray}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#999"
            />
          </Pressable>
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={Theme.primary}
          />
          <CustomText style={styles.checkboxText}>
            I agree to the <CustomText style={styles.link}>Terms</CustomText>{" "}
            and <CustomText style={styles.link}>Privacy Policy</CustomText>
          </CustomText>
        </View>
        <PrimaryButton title="Register" onPress={() => {}} />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <CustomText style={styles.orText}>Or</CustomText>
          <View style={styles.line} />
        </View>

        {/* Social logins */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/social-icons/google.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
            <CustomText style={styles.socialText}>Google</CustomText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/social-icons/facebook.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
            <CustomText style={styles.socialText}>Facebook</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom text */}
      <CustomText style={styles.loginText}>
        Already have an account?{" "}
        <CustomText
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
        </CustomText>
      </CustomText>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    //left: 24,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    justifyContent: "center", // centers form vertically
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 8,
    color: "#181818",
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    fontSize: 14,
    color: Theme.gray,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "500",
    fontFamily: "Poppins-500Medium",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F4F7FF",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins-500Medium",
    color: "#000",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#000000",
    fontWeight: "500",
    fontFamily: "Poppins-500Medium",
  },
  link: { color: "#4F6DFF", fontWeight: "700", fontFamily: "Poppins_700Bold" },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ddd" },
  orText: {
    marginHorizontal: 8,
    color: "#000000",
    fontSize: 14,
    fontWeight: "400",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F4F7FF",

    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialText: {
    marginLeft: 8,
    fontSize: 12,
    color: "#333",
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },

  loginText: {
    fontSize: 14,
    color: "#181818",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-500Medium",
  },
  loginLink: {
    color: "#4F6DFF",
    fontWeight: "700",

    fontFamily: "Poppins_700Bold",
  },
});
