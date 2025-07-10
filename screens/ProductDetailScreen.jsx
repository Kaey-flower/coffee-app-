import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

const ProductDetailScreen = () => {
  const [milk, setMilk] = useState("Full-fat milk");
  const [whippedCream, setWhippedCream] = useState("Without whipped cream");
  const [caffeine, setCaffeine] = useState("Without caffeine");

  const milkOptions = [
    "Full-fat milk",
    "Lactose free milk",
    "Soy milk",
    "Skim milk",
    "Almond milk (+ $0.7)",
    "Oat milk (+ $0.7)",
  ];

  const whippedCreamOptions = [
    "Without whipped cream",
    "With whipped cream (+ $0.5)",
  ];

  const caffeineOptions = ["Without caffeine"];

  const renderOptions = (options, selected, setSelected) =>
    options.map((option, index) => (
      <TouchableOpacity
        key={index}
        className="flex-row items-center my-1"
        onPress={() => setSelected(option)}
      >
        <View
          className={`h-4 w-4 rounded-full border-2 mr-3 ${
            selected === option
              ? "border-orange-500 bg-orange-500"
              : "border-gray-400"
          }`}
        />
        <Text className="text-sm text-gray-800">{option}</Text>
      </TouchableOpacity>
    ));

  return (
    <View className="flex-1 bg-white">
      {/* Top Image */}
      <View className="h-64 justify-center items-center ">
        <Image
          source={require("../assets/coffee3.jpeg")}
          className="h-40 w-40"
          resizeMode="contain"
        />
        <TouchableOpacity className="absolute top-12 right-5 bg-black/40 p-2 rounded-full">
          <AntDesign name="hearto" size={24} color={"red"} />
        </TouchableOpacity>
      </View>

      {/* Customization Form */}
      <ScrollView className="px-5 pt-4 pb-10">
        <View className="p-6">
          <Text className="text-base font-bold mb-2">Milk</Text>
          {renderOptions(milkOptions, milk, setMilk)}

          <Text className="text-base font-bold mt-5 mb-2">Whipped Cream</Text>
          {renderOptions(whippedCreamOptions, whippedCream, setWhippedCream)}

          <Text className="text-base font-bold mt-5 mb-2">Caffeine</Text>
          {renderOptions(caffeineOptions, caffeine, setCaffeine)}
        </View>

        <TouchableOpacity className="bg-orange-500 py-3 rounded-xl mt-8 items-center">
          <Text className="text-white font-semibold text-base">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;
