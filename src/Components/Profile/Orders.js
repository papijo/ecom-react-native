import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "./../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={11} color={Colors.onyx} isTruncated>
              112214521456312
            </Text>
            <Text bold fontSize={13} color={Colors.onyx} isTruncated>
              PAID
            </Text>
            <Text italic fontSize={11} color={Colors.onyx} isTruncated>
              Dec 12, 2020
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.onyx}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.onyx }}
            >
              $520
            </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={1}
          >
            <Text fontSize={11} color={Colors.onyx} isTruncated>
              112214521456312
            </Text>
            <Text bold fontSize={13} color={Colors.onyx} isTruncated>
              NOT PAID
            </Text>
            <Text italic fontSize={11} color={Colors.onyx} isTruncated>
              Aug 12, 2020
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.onyx }}
              _pressed={{ bg: Colors.onyx }}
            >
              $120
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
