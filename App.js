import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreens from "./screens/WelcomeScreens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MenuScreens from "./screens/MenuScreens";
import OrderScreens from "./screens/OrderScreens";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import BannerPage from "./screens/BannerPage";
import HomeScreens from "./screens/HomeScreens";
import LoginScreens from "./screens/LoginScreens";
import RegisterScreens from "./screens/RegisterScreens";
import LocationScreens from "./screens/LocationScreens";
import ProfileScreens from "./screens/ProfileScreens";
import Navigation from "./Navigation/Navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <WelcomeScreens /> */}
      {/* <OrderScreens /> */}
      {/* <LocationScreens /> */}
      {/* <MenuScreens /> */}
      {/* <ProductDetailScreen/> */}
      {/* <RegisterScreens /> */}
      {/* <BannerPage /> */}
      {/* <HomeScreens /> */}
      {/* <LoginScreens /> */}
      {/* <ProfileScreens /> */}
      <Navigation/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
