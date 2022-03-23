import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

function about() {
  return (
    <>
      <Box w="full" bg="black">
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Heading textColor={"whiteAlpha.800"} py="2">
            About
          </Heading>
        </Flex>
      </Box>
    </>
  );
}

export default about;
