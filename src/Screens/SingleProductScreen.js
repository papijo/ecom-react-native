import React, { useState } from "react";
import {
  Box,
  ScrollView,
  Text,
  View,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import Colors from "./../color";
import Ratings from "./../Components/Ratings";
import NumericInput from "react-native-numeric-input";
import Buttone from "./../Components/Button";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView mt={4} px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Ratings
          value={product.rating}
          text={` ${product.numReviews} reviews`}
        />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                maxValue={product.countInStock}
                minValue={0}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.charcoal}
                leftButtonBackgroundColor={Colors.charcoal}
              />
              <Spacer />
            </>
          ) : (
            <Heading bold color={Colors.red} italic fontSize={15}>
              Out of Stock
            </Heading>
          )}
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} textAlign="justify">
          {product.description}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.charcoal}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
