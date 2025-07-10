import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreens = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-cyan-600 px-6 py-8">
      <Text className="text-2xl font-bold text-center text-gray-800 mb-2 mt-8">
        Register!
      </Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        className="border border-gray-300 rounded-xl p-3 mb-4 text-base"
        placeholderTextColor="#ffffff"
      />

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-xl p-3 mb-4 text-base"
        keyboardType="email-address"
        placeholderTextColor="#ffffff"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded-xl p-3 mb-4 text-base"
        secureTextEntry
        placeholderTextColor="#ffffff"
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border border-gray-300 rounded-xl p-3 mb-6 text-base"
        secureTextEntry
        placeholderTextColor="#ffffff"
      />

      <TouchableOpacity className="bg-orange-500 p-4 rounded-xl mb-4">
        <Text className="text-white font-extrabold text-center text-base">
          Register
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-center items-center mb-4">
        <View className="h-px flex-1 bg-gray-300" />
        <Text className="mx-3 text-gray-400">or register with</Text>
        <View className="h-px flex-1 bg-gray-300" />
      </View>

      <View className="flex-row justify-center space-x-6">
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <Ionicons name="logo-google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <Ionicons name="logo-facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <Ionicons name="logo-apple" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="mt-6">
        <Text className="text-center text-lg font-semibold text-black">
          Already have an account?
          <Text className="text-orange-400 font-extrabold">Login Now</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreens;
