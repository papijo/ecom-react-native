import React from "react";
import { HStack, Box, Input, Pressable } from "native-base";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.white}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas......"
        w="85%"
        bg={Colors.gray}
        type="search"
        variant="outline"
        h={12}
        borderWidth={0}
        _focus={{ bg: Colors.gray, color: Colors.black }}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome
          name="shopping-basket"
          size={24}
          color={Colors.lightBlack}
        />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.white}
          _text={{ color: Colors.gray, fontSize: "11px" }}
        ></Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
