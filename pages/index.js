import { Box, Text, Heading, VStack, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { MdConstruction } from "react-icons/md";
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
        <VStack border="2px" w="xl" rounded="10">
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
            Website pe Kaam chalu hai
          </Text>
          <Box
            _hover={{
              textColor: `gray.300`,
            }}
          >
            <MdConstruction fontSize="25" />
          </Box>
          <Box mb="3.5" />
        </VStack>
      </Flex>
      <Footer />
    </div>
  );
}
