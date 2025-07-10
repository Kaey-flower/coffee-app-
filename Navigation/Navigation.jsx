import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "../screens/HomeScreens";
import MenuScreens from "../screens/MenuScreens";
import OrderScreens from "../screens/OrderScreens";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import LoginScreens from "../screens/LoginScreens";
import SigninScreens from "../screens/SigninScreens";
import LocationScreens from "../screens/LocationScreens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="location"
          component={LocationScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="order"
          component={OrderScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="product"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sign"
          component={SigninScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
