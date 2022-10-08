import {
  Box,
  Text,
  ScrollView,
  Flex,
  Image,
  Heading,
  Pressable,
} from "native-base";
import React from "react";
import HomeSearch from "../Components/HomeSearch";
import Colors from "./../color";
import products from "../data/Products";
import Ratings from "./Ratings";

const HomeProduct = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={3}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            bgColor={Colors.gray}
            rounded="md"
            overflow="hidden"
            my={3}
            pb={2}
            pt={0.3}
            w="45%"
            m={2}
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              size={120}
              alignSelf="center"
              resizeMode="center"
              mt={1}
            />

            <Box mx={3} mb={2} mt={2}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              {/* Ratings */}
              <Ratings value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProduct;
