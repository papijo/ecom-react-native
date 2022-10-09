import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import products from "./../data/Products";
import Colors from "./../color";

const OrderItems = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 3)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.charcoal} bold fontSize={15}>
                  {item.name}
                </Text>
                <Text color={Colors.deepestGray} bold fontSize={14} mt={4}>
                  ${item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.darkGray}
                  _pressed={{ bg: Colors.darkGray }}
                  _text={{ color: Colors.white }}
                >
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderItems;
