import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { SafeAreaView } from "react-native-safe-area-context";

const LocationScreens = () => {
  const [city, setCity] = useState("");
  const [selectedCafe, setSelectedCafe] = useState("Legnicka 5, Wroclaw");

  const cafes = [
    {
      name: "Calmwood Cafe",
      address: "123 Peace St.",
      hours: "8:00 AM - 2:00 PM",
    },
    {
      name: "Riverstone Roast",
      address: "456 River Rd.",
      hours: "7:00 AM - 5:00 PM",
    },
    {
      name: "Hilltop Brews",
      address: "789 Hill Ave.",
      hours: "6:30 AM - 4:30 PM",
    },
  ];

  const filteredCafes = cafes.filter(
    (cafe) =>
      cafe.name.toLowerCase().includes(city.toLowerCase()) ||
      cafe.address.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="bg-orange-300 p-4 rounded-3xl items-center">
          <Text className="text-xl font-bold text-gray-800">
            Choose Your Cafe
          </Text>
        </View>

        {/* Search */}
        <View className="mt-6">
          <Text className="text-sm text-white">Frequently chosen</Text>
          <TextInput
            className="bg-white p-3 rounded-lg mt-2 border border-gray-300"
            placeholder="Search by city or name"
          />
        </View>

        {/* Scrollable Content */}
        <ScrollView className="flex-1 mt-6">
          <View className="relative mb-6">
            <Image
              source={require("../assets/coffee4.jpeg")}
              className="w-full h32 rounded-xl"
              resizeMode="contain"
            />

            {filteredCafes.map((cafe, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCafe(cafe.address)}
                className={`absolute top-4 left-4 right-4 bg-white p-3 mb-2 rounded-lg shadow-md ${
                  selectedCafe === cafe.address ? "border border-green-600" : ""
                }`}
                style={{ marginTop: index * 70 }}
              >
                <Text className="font-bold text-gray-800">{cafe.name}</Text>
                <Text className="text-sm text-gray-600">{cafe.hours}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text className="text-lg font-semibold text-gray-700">
            Chosen Cafe
          </Text>
          <Text className="mt-1 text-base font-medium text-gray-800">
            {selectedCafe}
          </Text>

          <View className="flex-row justify-between mt-8 mb-10">
            <TouchableOpacity className="bg-cyan-600 px-6 py-3 rounded-lg">
              <Text className="text-white font-semibold">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-cyan-600 px-6 py-3 rounded-lg">
              <Text className="text-white font-semibold">Go Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-cyan-600 px-6 py-3 rounded-lg">
              <Text className="text-white font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreens;
