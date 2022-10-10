import { Center, Heading, Text } from "native-base";
import React from "react";
import Colors from "./../color";

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.steelGray} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} mb={2}>
        {title}
      </Heading>
      <Text fontSize={13} color={Colors.slateGray}>
        {subTitle}
      </Text>
      <Text fontSize={13} textAlign="center" italic color={Colors.slateGray}>
        {text}
      </Text>
      {/* Status */}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blueGray}>
          <Text fontSize={12} color={Colors.gray}>
            Paid on Jan 12, 2021
          </Text>
        </Center>
      )}

      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
          <Text fontSize={12} color={Colors.gray}>
            Not Delivered
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;
