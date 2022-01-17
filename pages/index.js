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
import Modalpop from "../components/modalpop";
import Header from "../components/Header";
import Card from "../components/card";
import { useRef } from "react";
import Footer from "../components/footer";
import { MdConstruction, MdArrowDownward } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Box bgGradient="linear(to-r, #D4F3EF, #30475E)" overflow={"hidden"}>
        <Header />
        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          // backgroundImage="url('/images/kyuubi.png')"
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <VStack spacing="10px">
            <VStack border="2px" w="xs" rounded="10">
              <Heading
                mt="3.5"
                userSelect="none"
                _hover={{
                  textColor: `gray.300`,
                }}
              >
                Aapka Swagat hai
              </Heading>
              {/* <Text
                userSelect="none"
                _hover={{
                  textColor: `gray.300`,
                }}
              >
                Get some life tips here
              </Text> */}
              <Box
                _hover={{
                  textColor: `gray.300`,
                }}
              >
                <MdArrowDownward fontSize="25" />
              </Box>
              <Box mb="3.5" />
            </VStack>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </VStack>
        </Flex>
        <Text
          bgGradient="linear(to-r, #D4F3EF, #30475E)"
          fontWeight="hairline"
          userSelect="none"
          _hover={{
            textColor: `green`,
          }}
        >
          !This Website is still under construction!
        </Text>
        <Box mt="5" width="full">
          <Footer />
        </Box>
      </Box>
    </div>
  );
}
