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
        <VStack>
          <Heading>Aapka Swagat hai</Heading>
          <Text>Website pe Kaam chalu hai</Text>
          <MdConstruction fontSize="25" />
        </VStack>
      </Flex>
      <Footer />
    </div>
  );
}
