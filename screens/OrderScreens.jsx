import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const OrderScreens = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 py-6">
        {/* Drink Image */}
        <View className="items-center mb-4">
          <Image
            source={require("../assets/coffee3.jpeg")}
            className="w-40 h-40"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-xl font-semibold text-gray-800 mb-1">
          Caramel Macchiato
        </Text>
        <Text className="text-sm text-gray-500 mb-4">
          Our Caramel Macchiato is the perfect combination of rich-tasting
          espresso, creamy milk, and the sweet, buttery caramel.
        </Text>

        {/* Size */}
        <Text className="text-base font-semibold text-gray-800 mb-2">Size</Text>
        <View className="flex-row space-x-3 mb-4">
          <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-full">
            <Text className="text-white text-sm">Small</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 px-4 py-2 rounded-full">
            <Text className="text-gray-700 text-sm">Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 px-4 py-2 rounded-full">
            <Text className="text-gray-700 text-sm">Large</Text>
          </TouchableOpacity>
        </View>

        {/* Customization Section */}
        <Text className="text-base font-semibold text-gray-800 mb-2">
          Customize your coffee
        </Text>

        {/* Milk Options */}
        <Text className="text-sm font-medium text-gray-700 mb-1">Milk</Text>
        <View className="mb-3">
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full bg-orange-500 border border-orange-500 mr-2" />
            <Text className="text-gray-700 text-sm">Full-fat milk</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Half-fat milk</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Almond milk (+ $0.7)</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Oat milk (+ $0.7)</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Soy milk (+ $0.7)</Text>
          </TouchableOpacity>
        </View>

        {/* Whipped Cream Options */}
        <Text className="text-sm font-medium text-gray-700 mb-1">
          Whipped Cream
        </Text>
        <View className="mb-3">
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full bg-orange-500 border border-orange-500 mr-2" />
            <Text className="text-gray-700 text-sm">With whipped cream</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Without whipped cream</Text>
          </TouchableOpacity>
        </View>

        {/* Caffeine Options */}
        <Text className="text-sm font-medium text-gray-700 mb-1">Caffeine</Text>
        <View className="mb-5">
          <TouchableOpacity className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full bg-orange-500 border border-orange-500 mr-2" />
            <Text className="text-gray-700 text-sm">With caffeine</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <View className="w-5 h-5 rounded-full border border-gray-400 mr-2" />
            <Text className="text-gray-700 text-sm">Without caffeine</Text>
          </TouchableOpacity>
        </View>

        {/* Price + Add to Cart Button */}
        <View className="flex-row justify-between items-center mt-4 bg-white py-3 px-4 rounded-xl shadow-md border border-gray-100">
          <Text className="text-gray-800 font-bold text-lg">$4.70</Text>
          <TouchableOpacity className="bg-orange-500 px-6 py-3 rounded-xl">
            <Text className="text-white font-semibold text-sm">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="flex-row justify-between items-center px-4 h-30 mb-6 w-full py-4 bg-white border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <Pressable onPress={() => navigation.navigate("menu")}>
            <AntDesign name="home" size={22} />
            <Text className="text-xs">Home</Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AntDesign name="appstore1" size={22} />
          <Text className="text-xs text-[#2D3E50]">Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AntDesign name="hearto" size={22} />
          <Text className="text-xs ">Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AntDesign name="user" size={22} />
          <Text className="text-xs text-[#2D3E50]">Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AntDesign name="shoppingcart" size={22} color="#2D3E50" />
          <Text className="text-xs text-[#2D3E50]">Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreens;
