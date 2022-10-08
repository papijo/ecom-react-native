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

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/4.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
          bg={Colors.gray}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          Nike Sneakers
        </Heading>
        <Ratings value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.deepestGray}
            leftButtonBackgroundColor={Colors.deepestGray}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} textAlign="justify">
          LNulla voluptate excepteur eu Lorem anim tempor nisi excepteur
          deserunt commodo reprehenderit consectetur reprehenderit. Minim sunt
          qui commodo magna nisi ad nostrud adipisicing. Reprehenderit laborum
          voluptate exercitation amet minim deserunt. Reprehenderit eiusmod
          aliquip aute do minim quis.
        </Text>
        <Buttone bg={Colors.deepestGray} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
