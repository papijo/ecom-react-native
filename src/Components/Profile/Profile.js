import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Colors from "./../../color";
import Buttone from "./../Button";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "email",
  },
  {
    label: "PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} mt={3} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWeight: "bold" }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                borderColor={Colors.charcoal}
                bgColor={Colors.platinum}
                py={4}
                type={i.type}
                color={Colors.black}
                fontSize={20}
                _focus={{
                  backgroundColor: Colors.black,
                  borderColor: Colors.charcoal,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.pewter} mt={5} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
