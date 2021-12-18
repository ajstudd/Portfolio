import { Heading, HStack, Flex, Spacer, Box } from "@chakra-ui/react";
import React from "react";
import {} from "react-icons/ai";
import {} from "react-icons/md";

function Header() {
  return (
    <div>
      <HStack
        py="5"
        px="10"
        bgGradient="linear(to-r, #D4F3EF, #30475E)"
        spacing="5"
      >
        <Box
          fontWeight="semibold"
          fontSize="3xl"
          textColor="gray.700"
          cursor="pointer"
          _hover={{
            textColor: `gray.600`,
          }}
        >
          AJX
        </Box>
        <Spacer />
        <Box
          fontWeight="semibold"
          fontSize="3xl"
          textColor="gray.900"
          cursor="pointer"
          _hover={{
            textColor: `gray.700`,
          }}
        >
          Contact
        </Box>
        <Box
          fontWeight="semibold"
          fontSize="3xl"
          textColor="gray.900"
          cursor="pointer"
          _hover={{
            textColor: `gray.700`,
          }}
        >
          FAQs
        </Box>
      </HStack>
    </div>
  );
}

export default Header;
