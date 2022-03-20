import React from "react";
import { Box, Text, HStack, Flex } from "@chakra-ui/react";
function card() {
  return (
    <>
      <Box
        w={{ base: "xs", lg: "full" }}
        shadow="lg"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        // border="2px"
        backdropFilter={{ blur: `16px` }}
        transition="all 0.3s"
        rounded="lg"
        opacity="30%"
        _hover={{ opacity: `50%`, transform: `scale(1.03)` }}
        blur="30px"
      >
        <HStack
          justifyContent={"space-evenly"}
          alignContent={"space-evenly"}
          rounded={"lg"}
          p="4"
          textColor={"white"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text>Hello</Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text>Hello</Text>
          </Flex>
        </HStack>
      </Box>
    </>
  );
}

export default card;
