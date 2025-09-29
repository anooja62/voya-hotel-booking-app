// screens/SignUp.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons (lock, mail, etc.)
import { Checkbox } from "expo-checkbox"; // if you’re using Expo
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  type SignUpProp = NativeStackNavigationProp<RootStackParamList, "Signup">;
  const navigation = useNavigation<SignUpProp>();
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Let’s Get Started</Text>
      <Text style={styles.subtitle}>Create an account to continue.</Text>

      {/* Name */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#999" />
        <TextInput placeholder="Wade Warren" style={styles.input} />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#999" />
        <TextInput
          placeholder="wadewarren123@gmail.com"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Password */}
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

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color="#4F6DFF"
        />
        <Text style={styles.checkboxText}>
          I agree to the <Text style={styles.link}>Terms</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
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

      {/* Login link */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14, color: "#333" },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: { marginLeft: 8, fontSize: 13, color: "#555" },
  link: { color: "#4F6DFF", fontWeight: "600" },

  registerButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 24,
  },
  registerText: { color: "#fff", fontSize: 16, fontWeight: "600" },

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

  loginText: { fontSize: 14, textAlign: "center", color: "#000" },
  loginLink: { color: "#4F6DFF", fontWeight: "600" },
});
