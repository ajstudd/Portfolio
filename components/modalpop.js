import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import Quotes from "../quotes.json";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

function modalpop() {
  const [jokes, setJokes] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const len = Quotes.Quotes.length;
  const ram = Math.floor(Math.random() * len);

  console.log(ram);
  return (
    <div>
      <>
        {/* <Box
          maxW="100"
          borderWidth="2px"
          borderRadius="lg"
          borderColor="teal.600"
          overflow="hidden"
          height="40px"
          boxShadow="lg"
          onClick={onOpen}
          _hover={{
            borderColor: `teal.300`,
          }}
        >
          <Image src="../pattern.png" alt="christmas tab" />
        </Box> */}
        <Box
          as="button"
          p={4}
          color="white"
          fontWeight="bold"
          borderRadius="md"
          bgGradient="linear(to-r, #1A374D, #406882)"
          onClick={onOpen}
          _hover={{
            bgGradient: "linear(to-r, #903749, #E84545 )",
          }}
        >
          Life Quotes!
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="white">
            <ModalHeader textColor="red">Quotes</ModalHeader>
            <ModalBody textColor="black">{Quotes.Quotes[ram]}</ModalBody>

            <ModalFooter>
              <Center>
                <Button mr={3} onClick={onClose}>
                  Close
                </Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default modalpop;
