import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfileScreens = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      
        <View className="items-center h-20 bg-orange-400 mt-4 px-4 py-6 w-full le">
        <Image source={require("../assets/profile.png")} className="h-22- w-20" />\
        <Text>Laura Vat</Text>
        <Text>124 points</Text>
      </View>
      <View>

      </View>
     
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
