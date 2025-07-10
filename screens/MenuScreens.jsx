import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";

const MenuScreens = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-cyan-600">
      <Text className="text-3xl font-semibold font-monospace text-white mb-2">
        Menu
      </Text>
      <View className="bg-gray-200 justify-center items-center rounded-full mx-2">
        <TextInput placeholder="Search" />
      </View>

      <Text className="text-white text-lg mt-4 text-2xl font-semibold ">
        Categories
      </Text>
      <View className="p-2 ">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-2 space-x-8"
        >
          <TouchableOpacity className="bg-orange-300 rounded-full px-4 py-2">
            <Text className="font-extrabold ">Hot Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text className="">Cold Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text>Smoothies</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text>Healthy Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text>Sandwiches</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text>Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-4 py-2">
            <Text>Snacks</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* <ScrollView className="px-4 pt-6"> */}
      <Text className="text-sm text-gray-500 mb-2">New in</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row space-x-4 rounded-lg  ">
          <View className="bg-white rounded-xl shadow-md p-3 w-40">
            <TouchableOpacity className="absolute top-2 right-2 z-10">
              <AntDesign name="heart" size={16} color="#FF5722" />
            </TouchableOpacity>

            <Text className="text-base font-semibold">Caramel Macchiato</Text>
            <Text className="text-red-500 font-bold">$4.00</Text>
            <Image
              source={require("../assets/coffee1.jpeg")}
              className="h-28 w-full rounded-lg mb-10"
              resizeMode="cover"
            />
          </View>

          <View className="bg-white rounded-xl shadow-md h-60 p-3 w-40">
            <TouchableOpacity className="absolute top-2 right-2 z-10">
              <AntDesign name="hearto" size={16} color="#FF5722" />
            </TouchableOpacity>
            <Text className="text-base font-semibold">Vanilla Latte</Text>
            <Text className="text-red-500 font-bold">$3.00</Text>
            <Image
              source={require("../assets/coffee7.jpeg")}
              className="h-28 w-full rounded-lg mb-10"
              resizeMode="contain"
            />
          </View>

          <View className="bg-white rounded-xl shadow-md p-3 w-40">
            <TouchableOpacity className="absolute top-2 right-2 z-10">
              <AntDesign name="heart" size={16} color="#FF5722" />
            </TouchableOpacity>
            <Text className="text-base font-semibold">White Choco Mocha</Text>
            <Text className="text-red-500 font-bold">$4.20</Text>
            <Image
              source={require("../assets/coffee3.jpeg")}
              className="h-28 w-full rounded-lg mb-10"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>

      <Text className="text-sm text-gray-500 mt-4 px-6 py-4 ">
        Frequently Ordered
      </Text>
      <ScrollView vertical showsVerticalScrollIndicator={true}>
        <View className="space-y-4 pb-10">
          <View className="flex-row justify-betwween space-x-3">
            <View className="bg-white  rounded-xl   shadow-md p-9 w-[48%]">
              <Image
                source={require("../assets/mocha.jpeg")}
                className="h-28 w-full rounded-lg mb-2"
                resizeMode="contain"
              />
              <Text className="text-base font-semibold">Caffe Mocha</Text>
              <Text className="text-red-500  font-bold">$3.70</Text>
            </View>

            <View className="bg-white rounded-xl shadow-md p-3 w-[50%]">
              <Image
                source={require("../assets/coffee5.jpeg")}
                className="h-36 w-full rounded-lg mb-2"
                resizeMode="contain"
              />
              <Text className="text-base font-semibold">
                Chocolate Milkshake
              </Text>
              <Text className="text-red-500 font-bold">$1.50</Text>
            </View>
          </View>
          <View className="flex-row justify-betwween space-x-3">
            <View className="bg-white rounded-xl shadow-md p-3 w-[50%]">
              <Image
                source={require("../assets/cinammon.jpeg")}
                className="h-36 w-full rounded-lg mb-2"
                resizeMode="cover"
              />
              <Text className="text-base font-semibold">Cinnamon Roll</Text>
              <Text className="text-red-500 font-bold">$1.50</Text>
            </View>

            <View className="bg-white rounded-xl shadow-md p-3 w-[50%]">
              <Image
                source={require("../assets/coffee8.jpeg")}
                className="h-36 w-full rounded-lg mb-2"
                resizeMode="contain"
              />
              <Text className="text-base font-semibold">Iced Lemon Tea</Text>
              <Text className="text-red-500 font-bold">$1.50</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* NAV BAR */}
      <View className="flex-row justify-between items-center px-10 py-4 bg-white border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <Pressable onPress={() => navigation.navigate("banner")}>
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
          <Pressable onPress={() => navigation.navigate("banner")}>
            <AntDesign name="shoppingcart" size={22} color="#2D3E50" />
            <Text className="text-xs text-[#2D3E50]">Cart</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreens;
