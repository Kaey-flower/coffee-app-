import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const LoginScreens = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);



  return (
    <SafeAreaView className="flex-1 bg-orange-400 px-6 justify-center">
      <Text className="text-3xl font-bold text-center mb-10 t">Login</Text>

      {/* Username */}
      <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-4 shadow-sm">
        <Icon name="person-outline" size={20} color="#888" className="mr-2" />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          className="flex-1 text-base text-gray-800"
        />
      </View>

      {/* Email Field */}
      <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-4 shadow-sm">
        <Icon name="mail-outline" size={20} color="#888" className="mr-2" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          className="flex-1 text-base text-gray-800"
        />
      </View>

      {/* Password Field */}
      <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mb-5 shadow-sm">
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#888"
          className="mr-2"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          className="flex-1 text-base text-gray-800"
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity className="bg-cyan-500 py-3 rounded-2xl items-center shadow-md">
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-base font-semibold">Log In</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center space-x-6 pt-9">
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <AntDesign name="facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
          <Icon name="apple" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreens;
