import {
  Box,
  HStack,
  Stack,
  Center,
  Text,
  Heading,
  useDisclosure,
  Collapse,
  Spacer,
  Flex,
  Wrap,
  VStack,
  WrapItem,
} from "@chakra-ui/react";

import {
  FiArrowDown,
  FiArrowUp,
  FiEdit,
  FiFigma,
  FiFile,
  FiMinus,
  FiHome,
  FiPackage,
  FiSearch,
  FiSettings,
  FiPlus,
  FiUser,
} from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/footer";
const Item = ({ title, subItem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box cursor="pointer" w="full">
      <HStack
        transition=" background-color 0.4s"
        _hover={{ bg: "blackAlpha.100" }}
        onClick={isOpen ? onClose : onOpen}
        p={4}
      >
        <Text>{title}</Text>
        <Spacer />
        {subItem && (isOpen ? <FiMinus /> : <FiPlus />)}
      </HStack>

      <Collapse unmountOnExit in={isOpen}>
        {subItem && <Box w="full" h="1px" bg="gray.300" />}
        <Wrap>
          <WrapItem>
            <Text noOfLines={[3, 2]} px="4">
              {subItem}
            </Text>
          </WrapItem>
        </Wrap>
      </Collapse>
    </Box>
  );
};

export default function faq() {
  return (
    <>
      <Box minW="full">
        <Header />
        <VStack mb="10">
          <Heading mb="5">FAQs</Heading>

          <Flex justifyContent={"center"} userSelect="none">
            <Stack
              maxW="sm"
              py={12}
              px={6}
              bg="gray.200"
              rounded={"lg"}
              minW={{ lg: "lg" }}
            >
              <Item
                title={"What is your major domain?"}
                subItem={"Frontend and UI Design"}
              />
              <Item
                title={"Where did you learn to code?"}
                subItem={"From School, college, internet and friends"}
              />
              <Item
                title={"What drives you in this field?"}
                subItem={
                  "My Major is Design and Development of UI because I love to create stuff"
                }
              />
              <Item
                title={"What is your favourite framework?"}
                subItem={"React"}
              />
              <Item
                title={"What is your experience with React?"}
                subItem={"Around 1 and a half years"}
              />
              <Item
                title={"What are your favourite libraries?"}
                subItem={"Next Js, Chakra UI"}
              />
            </Stack>
          </Flex>
        </VStack>
        <Footer />
      </Box>
    </>
  );
}
