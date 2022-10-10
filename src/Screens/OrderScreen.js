import React from "react";
import { Text, Box, ScrollView, Heading } from "native-base";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../Components/OrderItems";
import OrderModel from "../Components/OrderModel";

const OrderScreen = () => {
  return (
    <Box bg={Colors.gray} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="SHIPPING INFO"
            success
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
            danger
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
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OrderScreen;
