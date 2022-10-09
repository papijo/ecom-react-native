import React from "react";
import { Text, Box, ScrollView, Heading } from "native-base";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../Components/OrderItems";
import PlaceOrderModel from "../Components/PlaceOrderModel";

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.gray} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Janet Doe"
            text="admin@example.com"
            icon={
              <FontAwesome name="user" size={30} color={Colors.lightGray} />
            }
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Kenya"
            text="Pay Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.lightGray}
              />
            }
          />
          <OrderInfo
            title="DELIVERY INFO"
            subTitle="Address: "
            text="Somewhere in Stockholm, P.O.BOX 1234"
            icon={
              <Ionicons name="location" size={30} color={Colors.lightGray} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItems />
        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
