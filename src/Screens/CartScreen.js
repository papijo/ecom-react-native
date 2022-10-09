import React from "react";
import {
  Text,
  View,
  Box,
  Center,
  ScrollView,
  HStack,
  Button,
} from "native-base";
import Colors from "./../color";
import CartEmpty from "./../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "../Components/Button";

const CartScreen = () => {
  return (
    <Box flex={1} safeArea bg={Colors.gray}>
      {/* Header */}
      <Center w="full" py={5}>
        <HStack>
          <Text color={Colors.black} fontSize={20} bold>
            Cart
          </Text>
          <FontAwesome
            name="shopping-basket"
            size={15}
            color={Colors.black}
            pt={3}
          />
        </HStack>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}
      {/* CART */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text bold>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.black}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.white }}
            >
              $450.00
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color={Colors.white} mt={10}>
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
