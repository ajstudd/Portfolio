import React from "react";
import { Box, Text } from "@chakra-ui/react";

function banner({ children }) {
  return (
    <>
      <Box
        bg="gray.600"
        w="-moz-fit-content"
        rounded="lg"
        textAlign={"center"}
        p="2"
        mx="2"
        my={{ base: "2", lg: "0" }}
        fontSize={{ base: "sm", lg: "xl" }}
        color="white"
      >
        {children}
      </Box>
    </>
  );
}

export default banner;
