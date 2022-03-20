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
    <>
      <Box bgGradient="linear(to-r, #D4F3EF, #30475E)" h="200vh" w="full">
        <Header />
        <Flex justifyContent={"center"}>
          <VStack
            spacing="0"
            px="10"
            py="4"
            fontSize={{ base: "4xl", lg: "8xl" }}
            fontWeight="Bold"
            textAlign="left"
            color="gray.800"
          >
            <Text>Junaid Ahmad</Text>

            <Text>Frontend Developer</Text>
          </VStack>
        </Flex>

        <Box mt="5" width="full"></Box>
      </Box>
      <Footer />
    </>
  );
}
