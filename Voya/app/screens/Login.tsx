import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Theme } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import PrimaryButton from "../components/custom/PrimaryButton";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  type LoginProp = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<LoginProp>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <CustomText style={styles.title}>Welcome Back!</CustomText>
        <CustomText style={styles.subtitle}>Log in to continue.</CustomText>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter email address"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={Theme.gray}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
            placeholderTextColor={Theme.gray}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#999"
            />
          </Pressable>
        </View>

        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              color="#4F6DFF"
            />
            <CustomText style={styles.checkboxText}>Remember Me</CustomText>
          </View>

          <TouchableOpacity>
            <CustomText style={styles.link}>Forgot Password</CustomText>
          </TouchableOpacity>
        </View>

        <PrimaryButton
          title="Log In"
          onPress={() => {
            if (email.trim() && password.trim()) {
              navigation.navigate("Tabs");
            } else {
              alert("Please enter email and password");
            }
          }}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <CustomText style={styles.orText}>Or</CustomText>
          <View style={styles.line} />
        </View>

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
      <CustomText style={styles.signupText}>
        Don’t have an account?{" "}
        <CustomText
          style={styles.signupLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </CustomText>
      </CustomText>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    //left: 24,
    zIndex: 10,
  },
  container: { flex: 1, backgroundColor: "#fff", padding: 24 },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 8,
    color: "#181818",
    fontFamily: "Poppins_600SemiBold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 24,
  },
  checkboxText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#000000",
    fontWeight: "500",
    fontFamily: "Poppins-500Medium",
  },
  link: {
    color: Theme.primary,
    fontWeight: "700",
    fontSize: 13,
    textDecorationLine: "underline",
    fontFamily: "Poppins_700Bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ddd" },
  orText: { marginHorizontal: 8, color: "#888", fontSize: 12 },

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

  signupText: {
    fontSize: 14,
    color: "#181818",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-500Medium",
  },
  signupLink: {
    color: "#4F6DFF",
    fontWeight: "700",

    fontFamily: "Poppins_700Bold",
  },
});
