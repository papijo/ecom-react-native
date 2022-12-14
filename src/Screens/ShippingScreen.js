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
} from "native-base";
import Colors from "./../color";
import { FontAwesome5 } from "@expo/vector-icons";
import Buttone from "../Components/Button";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

const ShippingScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.steelGray} py={5}>
      {/* Header */}
      <Center pb={15}>
        <HStack>
          <FontAwesome5
            name="shipping-fast"
            size={15}
            color={Colors.white}
            pt={3}
          />
          <Text color={Colors.white} fontSize={14} bold ml={1}>
            DELIVERY DETAILS
          </Text>
        </HStack>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((m, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{ fontSize: "12", fontWeight: "bold" }}
                >
                  {m.label}
                </FormControl.Label>
                <Input
                  type={m.type}
                  py={4}
                  _focus={{ bg: Colors.platinum, borderColor: Colors.silver }}
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => navigation.navigate("PlaceOrder")}
              bg={Colors.steelGray}
              mt={5}
              color={Colors.white}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
