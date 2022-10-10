import React from "react";
import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
  HStack,
  Image,
  Spacer,
} from "native-base";
import Colors from "./../color";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Buttone from "../Components/Button";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/mc.png"),
    alt: "Master Card",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/visa.png"),
    alt: "visa",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/gpay.png"),
    alt: "google pay",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/apple.png"),
    alt: "google pay",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/discover.png"),
    alt: "google pay",
    icon: "FontAwesome",
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.steelGray} py={5}>
      {/* Header */}
      <Center pb={15}>
        <HStack>
          <Text color={Colors.white} fontSize={14} bold mr={1}>
            SELECT PAYMENT METHOD
          </Text>
          <FontAwesome name="cc-visa" size={15} color={Colors.white} pt={3} />
        </HStack>
      </Center>
      {/* Selection */}
      <Box h="full" bg={Colors.platinum} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((pm, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    w={60}
                    h={50}
                    resizeMode="contain"
                    source={pm.image}
                    alt="Payment"
                  />
                  <Spacer />
                </Box>
                {pm.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.steelGray}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.steelGray}
                  />
                )}
              </HStack>
            ))}
            <Buttone
              bg={Colors.steelGray}
              mt={5}
              color={Colors.white}
              onPress={() => navigation.navigate("shipping")}
            >
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment Method is <Text bold> Paypal</Text> by default.
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
