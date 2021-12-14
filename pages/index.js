import {
  Box,
  Center,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <HStack px={5} py={8} shadow="base" bg="gray.100">
        <Heading fontSize={22}>Hedron</Heading>
        <Spacer />
        <HStack fontWeight="normal" spacing="4" cursor="pointer">
          <Box onClick="">Home</Box>
          <Box onClick="">Gallery</Box>
          <Box onClick="">Portfolio</Box>
          <Box onClick="">About</Box>
          <Box onClick="">Contact</Box>
        </HStack>
      </HStack>
      <HStack>
        <Heading m="4" width="lg">
          A picture is worth thousand words
        </Heading>
        <Box fontWeight="medium">-AJ</Box>
        <Spacer />
        <HStack px="10" spacing="50px">
          <VStack>
            <Box fontWeight="semibold">Partnership</Box>
            <Box>Get in touch with us</Box>
          </VStack>
          <VStack>
            <Box>Email</Box>
            <Box>Instagram</Box>
            <Box>Twitter</Box>
          </VStack>
        </HStack>
      </HStack>
    </div>
  );
}
