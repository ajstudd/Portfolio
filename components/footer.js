import {
  Box,
  Heading,
  HStack,
  Spacer,
  Divider,
  Center,
} from "@chakra-ui/react";

import Link from "next/link";
import { FiSend, FiInstagram, FiMail } from "react-icons/fi";
import React from "react";

function footer() {
  return (
    <div>
      <HStack spacing="5" py="5" px="10" bg="gray.800" id="contacts">
        <Box
          onClick={() => {
            window.open("https://t.me/ajstudd31");
          }}
          textColor="white"
          cursor="pointer"
          _hover={{
            textColor: `gray.600`,
          }}
        >
          <FiSend />
        </Box>
        <Box
          onClick={() => {
            window.open("https://www.instagram.com/ajx.me/");
          }}
          textColor="white"
          cursor="pointer"
          _hover={{
            textColor: `gray.600`,
          }}
        >
          <FiInstagram />
        </Box>
        <Box
          onClick={() => {
            window.open("mailto:j7654894110@gmail.com");
          }}
          textColor="white"
          cursor="pointer"
          _hover={{
            textColor: `gray.600`,
          }}
        >
          <FiMail />
        </Box>

        <Spacer />
        <Link passHref href={"/feedback"}>
          <Box
            textColor="white"
            cursor="pointer"
            _hover={{
              textColor: `gray.600`,
            }}
          >
            Feedback
          </Box>
        </Link>
      </HStack>
      <Center>
        <Box height="1px" width="full" bg="gray.700"></Box>
      </Center>
      <HStack py="-1" bg="gray.800" alignItems="center" justifyContent="center">
        <Box
          py="2"
          textColor="white"
          fontWeight="light"
          userSelect="none"
          _hover={{ textColor: `orange.200` }}
        >
          Designed by AJ
        </Box>
      </HStack>
    </div>
  );
}

export default footer;
