import {
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Button,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/card";
import { useRef } from "react";
import Footer from "../components/footer";
import { MdConstruction, MdArrowDownward } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Box bgGradient="linear(to-r, #D4F3EF, #30475E)" h="200vh">
        <Header />
        <Flex justifyContent="center" alignItems="center">
          <VStack>
            <Heading
              fontSize="8xl"
              fontWeight="Bold"
              textAlign="center"
              color="gray.800"
            >
              Junaid Ahmad
            </Heading>

            <Heading
              fontSize="8xl"
              fontWeight="Bold"
              textAlign="center"
              color="gray.800"
            >
              Frontend Developer
            </Heading>
            <Box w="full"></Box>
          </VStack>
        </Flex>

        <Box mt="5" width="full"></Box>
      </Box>
      <Footer />
    </div>
  );
}
