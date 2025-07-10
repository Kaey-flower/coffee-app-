import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreens = () => {
  return (
    <SafeAreaView className="bg-cyan-600 h-full px-6 justify-center items-center justify-center">
      {/* <Image className="h-20 w-20" source={require("../assets/welcome.jpeg")} /> */}
      <Text className="text-3xl font-bold text-white text-center  mb-8">
        Welcome to
      </Text>
      <Text className="text-6xl font-bold text-orange-400 text-center mb-4">
        Cavosh
      </Text>
      <View className="h-16 w-30 bg-gray-500 justify-center ">
        <Text className="text-lg font-bold text-white text-center ">
          Get Started
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreens;

const styles = StyleSheet.create({});
