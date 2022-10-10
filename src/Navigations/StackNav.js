import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SingleProductScreen from "./../Screens/SingleProductScreen";
import ShippingScreen from "./../Screens/ShippingScreen";
import PaymentScreen from "./../Screens/PaymentScreen";
import PlaceOrderScreen from "./../Screens/PlaceOrderScreen";
import OrderScreen from "./../Screens/OrderScreen";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRoutename="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Checkout" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
