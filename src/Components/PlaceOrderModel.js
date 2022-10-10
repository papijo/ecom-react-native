import { Center, Button, Modal, VStack, HStack, Text } from "native-base";
import React, { useState } from "react";
import Colors from "./../color";
import Buttone from "./Button";
import { useNavigation } from "@react-navigation/native";

const OrdersInfo = [
  {
    title: "Products",
    price: 123.04,
    color: "black",
  },
  {
    title: "Shipping",
    price: 321.06,
    color: "black",
  },
  {
    title: "Tax",
    price: 21.06,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 563.23,
    color: "main",
  },
];

const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center mb={5}>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.onyx}
        color={Colors.platinum}
        mt={5}
      >
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium"> {i.title} </Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.onyx}
                    bold
                    fontSize={12}
                  >
                    {i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.charcoal}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.main }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
