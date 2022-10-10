import {
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  Center,
  Button,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import products from "./../data/Products";

const Swiper = () => {
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={products.slice(0, 3)}
      renderItem={renderItems}
      renderHiddenItem={renderHiddenItems}
      showsVerticalScrollIndicator={false}
    />
  );
};

//Cart Item
const renderItems = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={3}>
            <Text isTruncated color={Colors.black} bold fontSize={14}>
              {data.item.name}
            </Text>
            <Text bold color={Colors.black}>
              ${data.item.price}{" "}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.black}
              _pressed={{ bg: Colors.lightBlack }}
              _text={{ color: Colors.white }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
};

//Hidden
const renderHiddenItems = () => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      rounded={10}
      bg={Colors.white}
    >
      <Center alignItems="center" space={2}>
        <FontAwesome name="trash" size={24} color={Colors.red} />
      </Center>
    </Pressable>
  );
};

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
