import React from "react";
import publicSVG from "../public/resources/publicSVG.svg";
import { Flex, Image, Box, Text, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
function feedback() {
  return (
    <>
      <Link passHref href={"/"}>
        <Button
          m="2"
          leftIcon={<FiArrowLeft />}
          colorScheme="teal"
          variant="outline"
        >
          Back
        </Button>
      </Link>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box boxSize={"lg"}>
          <Image src="resources\publicSVG.svg" alt="publicSVG" />
          <Text
            pt="10"
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={"2xl"}
          >
            Work in Progress
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default feedback;
