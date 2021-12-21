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
import Footer from "../components/footer";
import { MdConstruction, MdArrowDownward } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        height="81vh"
        bgGradient="linear(to-r, #D4F3EF, #30475E)"
      >
        <VStack>
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
            <Text
              userSelect="none"
              _hover={{
                textColor: `gray.300`,
              }}
            >
              Get some life tips here
            </Text>
            <Box
              _hover={{
                textColor: `gray.300`,
              }}
            >
              <MdArrowDownward fontSize="25" />
            </Box>
            <Box mb="3.5" />
          </VStack>

          <Modalpop />
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
      <Footer />
    </div>
  );
}
