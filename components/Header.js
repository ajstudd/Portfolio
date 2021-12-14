import { Heading, HStack, Flex, Spacer, Box } from "@chakra-ui/react";
import React from "react";
import {} from "react-icons/ai";
import {} from "react-icons/md";

function Header() {
  return (
    <div>
      <HStack alignItems="center" justifyContent="center" bg="gray.100">
        <Heading textColor="gray.600">AJX</Heading>
      </HStack>
    </div>
  );
}

export default Header;
