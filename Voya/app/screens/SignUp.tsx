import React, { useState } from "react";
import {
  View,
  Text,
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

        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.subtitle}>Create an account to continue.</Text>

        {/* Inputs */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter Full name"
            style={styles.input}
            placeholderTextColor="#A2A5AD"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput
            placeholder="Enter email address"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#A2A5AD"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Create Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
            placeholderTextColor="#A2A5AD"
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

        {/* Register button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Social logins */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/social-icons/google.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/social-icons/facebook.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom text */}
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
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#000", // black text
  },

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
  socialText: { marginLeft: 8, fontSize: 12, color: "#333", fontWeight: "700" },

  loginText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
    fontWeight: "600",
  },
  loginLink: { color: "#4F6DFF", fontWeight: "700" },
});
