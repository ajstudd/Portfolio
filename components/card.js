import React from "react";
import { Box, Text, HStack, Flex } from "@chakra-ui/react";
function card({ children }) {
  return (
    <>
      <Flex
        justifyContent={"center"}
        scale={{ base: "sm", lg: "full" }}
        px="10"
        py="6"
      >
        <Box
          shadow="lg"
          bgGradient="linear(to-l, #e5989b, #ffcdb2)"
          // border="2px"
          backdropFilter={{ blur: `16px` }}
          transition="all 0.3s"
          rounded="lg"
          opacity={"80%"}
          _hover={{ opacity: `100%`, transform: `scale(1.5)` }}
          blur="30px"
        >
          <HStack
            justifyContent={"space-evenly"}
            alignContent={"space-evenly"}
            rounded={"lg"}
            py="4"
            px="2"
            fontWeight={"semibold"}
            textColor={"gray.800"}
          >
            {children}
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default card;
