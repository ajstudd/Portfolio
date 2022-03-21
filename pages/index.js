import {
  Box,
  Text,
  VStack,
  Flex,
  Image,
  HStack,
  Center,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/card";
import Banner from "../components/banner";

import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <Box bgGradient="linear(to-r, #D4F3EF, #30475E)" w="full">
        <Header />

        <Flex
          justifyContent={"center"}
          alignItems="center"
          flexDirection="column"
        >
          <Box></Box>
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

          <HStack spacing={"5"}>
            <Box>
              <Text
                fontSize={"3xl"}
                fontWeight="semibold"
                textColor={"#05595B"}
              >
                Experienced in
              </Text>
            </Box>

            {[
              "React JS",
              "Next JS",
              "Chakra UI",
              "Node JS",
              "Figma",
              "Mondo DB",
              "Strapi CMS",
            ].map((item, index) => (
              <Banner key={index}>{item}</Banner>
            ))}
          </HStack>
        </Flex>
        <Box bg="gray.800" mt="10" color="white">
          <Center>
            <VStack>
              <Text mt="4" fontSize={"3xl"} fontWeight="semibold">
                My Projects{" "}
              </Text>

              <HStack px="20" py="5" spacing={"5"}>
                <Card>
                  <Text>Product Design</Text>
                  <Flex alignItems="center" justifyContent="center" px="4">
                    <Image
                      h="150px"
                      rounded="lg"
                      w="full"
                      src="resources\Calculator.png"
                      alt="Dan Abramov"
                    />
                  </Flex>
                </Card>
                <Card>
                  <Text>Card Deisgn</Text>
                  <Flex alignItems="center" justifyContent="center" px="7">
                    <Image
                      h="150px"
                      rounded="lg"
                      w="full"
                      src="resources\CardDesign.png"
                      alt="Dan Abramov"
                    />
                  </Flex>
                </Card>
                <Card>
                  <Text>Product Design</Text>
                  <Flex alignItems="center" justifyContent="center" px="7">
                    <Image
                      h="150px"
                      rounded="lg"
                      w="full"
                      src="resources\Calculator.png"
                      alt="Dan Abramov"
                    />
                  </Flex>
                </Card>
                <Card>
                  <Text>Product Design</Text>
                  <Flex alignItems="center" justifyContent="center" px="7">
                    <Image
                      h="150px"
                      rounded="lg"
                      w="full"
                      src="resources\Calculator.png"
                      alt="Dan Abramov"
                    />
                  </Flex>
                </Card>
              </HStack>
            </VStack>
          </Center>
        </Box>
        <Box mt="5" width="full"></Box>
        <Footer />
      </Box>
    </>
  );
}
