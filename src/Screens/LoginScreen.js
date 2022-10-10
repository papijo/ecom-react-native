import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Colors from "./../color";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.white}>
      {/* <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        w="full"
        source={require("../../assets/bk2.png")}
      /> */}
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading color={Colors.black}>LOGIN</Heading>
        <VStack space={6} pt="6">
          {/* Username */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.deepGray} />
            }
            variant="underlined"
            placeholder="user@email.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* Password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.deepGray} />
            }
            variant="underlined"
            placeholder="***********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
