// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import AntDesign from "react-native-vector-icons/AntDesign";
// const BannerPage = ({ navigation }) => {
//   const [size, setSize] = useState("Small");

//   const customization = {
//     milk: "Oat",
//     cream: "No",
//     caffeine: "Yes",
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* Top Banner */}
//       <View className="bg-cyan-600 rounded-b-3xl px-6 py-8  mt-6 items-center">
//         <Image
//           source={require("../assets/coffee5.jpeg")}
//           className="h-40 w-40"
//           resizeMode="contain"
//         />
//         <TouchableOpacity className="absolute top-6 right-5 bg-white p-2 rounded-full">
//           <AntDesign name="hearto" size={24} color="#FF5722" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView className="px-5 pt-4">
//         {/* Title & Description */}
//         <Text className="text-xl font-bold text-gray-800">
//           Chocolate Macchiato
//         </Text>
//         <Text className="text-sm text-gray-600 mt-2">
//           Our Chocolate Macchiato is the perfect combination of a rich-lasting
//           espresso, creamy milk and the sweet dark chocolate.
//         </Text>

//         {/* Size */}
//         <Text className="mt-5 mb-2 text-sm font-semibold text-gray-800">
//           Size
//         </Text>
//         <View className="flex-row space-x-3">
//           {["Small", "Medium", "Large"].map((option) => (
//             <TouchableOpacity
//               key={option}
//               onPress={() => setSize(option)}
//               className={`px-4 py-1 rounded-full border ${
//                 size === option
//                   ? "bg-orange-500 border-orange-500"
//                   : "border-gray-300"
//               }`}
//             >
//               <Text
//                 className={`text-sm ${
//                   size === option ? "text-white" : "text-gray-700"
//                 }`}
//               >
//                 {option}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Customize Summary */}
//         <Text className="mt-6 mb-2 text-lg font-semibold text-gray-800">
//           Customize your coffee
//         </Text>
//         <View className="flex-row flex-wrap gap-4">
//           <View className="items-center space-y-1">
//             <Text className="text-xs text-gray-400">Milk</Text>
//             <Text className="text-base font-semibold">
//               {customization.milk}
//             </Text>
//           </View>
//           <View className="items-center space-y-1">
//             <Text className="text-xs text-gray-400">Cream</Text>
//             <Text className="text-base font-semibold">
//               {customization.cream}
//             </Text>
//           </View>
//           <View className="items-center space-y-1">
//             <Text className="text-xs text-gray-400">Caffeine</Text>
//             <Text className="text-base font-semibold">
//               {customization.caffeine}
//             </Text>
//           </View>
//         </View>

//         {/* Price & Button */}
//         <View className="mt-8 flex-row justify-between items-center">
//           <Text className="text-lg font-bold text-black">
//             Total price{"\n"}
//             <Text className="text-xl">$4.70</Text>
//           </Text>
//           <TouchableOpacity className="bg-cyan-600 px-6 py-3 rounded-xl">
//             <Text className="text-white font-semibold text-base">
//               Add to cart
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default BannerPage;
