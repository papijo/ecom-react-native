import { Box, Text } from "native-base";
import React from "react";
import HomeProduct from "../Components/HomeProduct";
import HomeSearch from "../Components/HomeSearch";
import Colors from "./../color";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.white}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
};

export default HomeScreen;
