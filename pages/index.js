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
import head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Card from "../components/card";
import Banner from "../components/banner";
import { useState } from "react";
import About from "../components/about";
import Footer from "../components/footer";
export default function Home() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.junaid.works` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [contact, setContact] = useState(false);
  return (
    <>
      {/* Imported head from next and created a title to show in browser */}
      <head>
        <title>Junaid Ahmad | Frontend</title>
        <link rel="canonical" href={canonicalUrl} />

        <meta
          name="description"
          content="Find information about me and my work here."
        />

        <meta property="og:url" content="https://www.junaid.works/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Junaid Ahmad | Frontend" />
        <meta
          property="og:description"
          content="Find information about me and my work here."
        />
        <meta
          property="og:image"
          content="https://ajstudd.github.io/Image/WhatsApp%20Image%202021-01-16%20at%2010.42.45%20AM.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="junaid.works" />
        <meta property="twitter:url" content="https://www.junaid.works/" />
        <meta name="twitter:title" content="Junaid Ahmad | Frontend" />
        <meta
          name="twitter:description"
          content="Find information about me and my work here."
        />
        <meta
          name="twitter:image"
          content="https://ajstudd.github.io/Image/WhatsApp%20Image%202021-01-16%20at%2010.42.45%20AM.jpeg"
        />
      </head>
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
          <About />
          <Flex flexFlow={{ base: "column", lg: "row" }} d="flex" mr="4" mt="4">
            <Box px="2">
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
          </Flex>
        </Flex>
        <Box bg="gray.800" mt="10" color="white">
          <Center>
            <VStack>
              <Text mt="4" fontSize={"3xl"} fontWeight="semibold">
                My Projects{" "}
              </Text>

              <SimpleGrid columns={{ base: "1", lg: "3" }} spacingY="10px">
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
                <Card>
                  <VStack>
                    <Text>Mock Websites</Text>
                    <Flex alignItems="center" justifyContent="center" px="7">
                      <Image
                        h="150px"
                        rounded="lg"
                        w="full"
                        src="resources\NetlifyMock.png"
                        alt="Dan Abramov"
                      />
                    </Flex>
                  </VStack>
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
              </SimpleGrid>
            </VStack>
          </Center>
        </Box>
        <Box mt="5" width="full"></Box>
        <Footer />
      </Box>
    </>
  );
}
