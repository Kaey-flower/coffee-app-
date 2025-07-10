import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const newItems = [
  {
    name: "Caramel Macchiato",
    price: "$4.00",
    image: require("../assets/coffee3.jpeg"),
  },
  {
    name: "Vanilla Latte",
    price: "$3.00",
    image: require("../assets/coffee4.jpeg"),
  },
  {
    name: "White Choco Mocha",
    price: "$4.00",
    image: require("../assets/coffee5.jpeg"),
  },
];

const frequentItems = [
  {
    name: "Caramel Macchiato",
    price: "$6.70",
    desc: "Large, Oat milk",
    image: require("../assets/coffee1.jpeg"),
  },
  {
    name: "Caffe Mocha",
    price: "$5.50",
    desc: "Single, Almond milk",
    image: require("../assets/coffee7.jpeg"),
  },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const NewItemCard = ({ item }) => (
  <View className="w-32 bg-white rounded-2xl shadow mr-4 p-3 items-center">
    <Image
      source={item.image}
      className="h-20 w-20 mb-2"
      resizeMode="contain"
    />
    <Text className="text-sm font-medium text-center">{item.name}</Text>
    <Text className="text-sm text-gray-600">{item.price}</Text>
    <TouchableOpacity className="bg-orange-500 px-3 py-1 rounded-full mt-2">
      <Text className="text-white text-xs font-semibold">+</Text>
    </TouchableOpacity>
  </View>
);

const FrequentItemRow = ({ item }) => (
  <View className="flex-row items-center justify-between mb-4">
    <View className="flex-row items-center space-x-3">
      <Image
        source={item.image}
        className="h-16 w-16 rounded-xl"
        resizeMode="contain"
      />
      <View>
        <Text className="font-medium">{item.name}</Text>
        <Text className="text-gray-500 text-sm">{item.desc}</Text>
      </View>
    </View>
    <View className="items-end">
      <Text className="font-bold text-gray-800">{item.price}</Text>
      <TouchableOpacity className="bg-orange-500 mt-1 px-2 py-1 rounded-full">
        <AntDesign name="plus" size={16} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

const HomeScreens = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="bg-cyan-700 rounded-2xl p-4 mb-4">
        <Text className="text-orange-400 font-extrabold text-lg">Cavosh</Text>
        <Text className="text-white text-base font-semibold mt-1">
          {getGreeting()}, user
        </Text>
        <Text className="text-white text-xs mt-1">
          Your cafe: <Text className="font-bold">Cavosh Cafe</Text>
        </Text>
        <Text className="text-white text-xs">Legnicka 20, Wroclaw</Text>
        <TouchableOpacity className="absolute right-4 top-4">
          <Text className="text-orange-400 font-medium text-sm">Change</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-2 mb-4">
        <TextInput placeholder="Search" placeholderTextColor="#888" />
      </View>

      {/* New In */}
      <Text className="text-base font-bold mb-2">New in</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      >
        {newItems.map((item, index) => (
          <NewItemCard key={index} item={item} />
        ))}
      </ScrollView>

      {/* Frequently Ordered */}
      <Text className="text-base font-bold mb-2">Frequently ordered</Text>
      <FlatList
        data={frequentItems}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => <FrequentItemRow item={item} />}
        showsVerticalScrollIndicator={false}
      />
      {/* NAV BAR */}
      <View className="flex-row justify-between items-center mt-4 h-40 px-6 py-2 bg-white border-t border-gray-200">
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
          <Pressable onPress={() => navigation.navigate("order")}>
            <AntDesign name="shoppingcart" size={22} color="#2D3E50" />
            <Text className="text-xs text-[#2D3E50]">Cart</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreens;
