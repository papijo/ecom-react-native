import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Message from "./Notifications/Message";
import Ratings from "./Ratings";
import Buttone from "./Button";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message
        color={Colors.black}
        bg={Colors.gray}
        bold
        children="NO REVIEW"
      /> */}
      {/*  */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          John Doe
        </Heading>
        <Ratings value={4.5} />
        <Text my={2} fontSize={11}>
          Jan 12, 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children="Ea labore eiusmod ipsum ea aliqua do et et."
        />
      </Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12", fontWeight: "bold" }}>
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.gray}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.gray,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Average" value="2" />
              <Select.Item label="3 - Good" value="3" />
              <Select.Item label="4 - Very Good" value="4" />
              <Select.Item label="5 - Excellent" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12", fontWeight: "bold" }}>
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="This Product is good......."
              borderWidth={0}
              bg={Colors.gray}
              color={Colors.black}
              py={4}
              _focus={{
                bg: Colors.lightBlack,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.deepestGray} color={Colors.white}>
            SUBMIT
          </Buttone>
          {/*  IF USER IS NOT LOGGED IN */}
          {/* <Message
            color={Colors.white}
            bg={Colors.black}
            children="Please Login to review this Product"
          /> */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
