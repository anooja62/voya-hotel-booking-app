import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Log in to continue.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput
            placeholder="wadewarren123@gmail.com"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="••••••••"
            secureTextEntry={!passwordVisible}
            style={styles.input}
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
            <Text style={styles.checkboxText}>Remember Me</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.link}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#DB4437" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </Text>
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#A2A5AD",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "500",
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
  input: { flex: 1, marginLeft: 8, fontSize: 14, color: "#000" },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkboxText: { marginLeft: 6, fontSize: 13, color: "#555" },
  link: { color: "#4F6DFF", fontWeight: "600", fontSize: 13 },

  loginButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 24,
  },
  loginText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
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
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialText: { marginLeft: 8, fontSize: 14, color: "#333" },

  signupText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
    fontWeight: "600",
  },
  signupLink: { color: "#4F6DFF", fontWeight: "700" },
});
