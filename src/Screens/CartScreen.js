import React from "react";
import { Text, View, Box, Center } from "native-base";
import Colors from "./../color";

const CartScreen = () => {
  return (
    <Box flex={1} safeArea bg={Colors.lightBlack}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
    </Box>
  );
};

export default CartScreen;
