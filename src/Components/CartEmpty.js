import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "./Button";

const CartEmpty = () => {
  return (
    <Box flex={1}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome
            name="shopping-basket"
            size={64}
            color={Colors.deepestGray}
          />
        </Center>
        <Text COLOR={Colors.deepestGray} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.lightBlack} color={Colors.white}>
        START SHOPPING
      </Buttone>
    </Box>
  );
};

export default CartEmpty;
