import {
  Heading,
  HStack,
  Flex,
  Spacer,
  Box,
  position,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Link from "next/link";
import {
  IoReorderThree,
  IoPersonOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import {} from "react-icons/md";

function Header() {
  return (
    <div>
      <HStack
        h="20"
        py="5"
        px="10"
        // bgGradient="linear(to-r, #D4F3EF, #30475E)"
        spacing="5"
      >
        <Link passHref href={"/"}>
          <Box
            fontWeight="semibold"
            fontSize="3xl"
            textColor="gray.800"
            cursor="pointer"
            _hover={{
              textColor: `gray.600`,
              behavior: "smooth",
            }}
          >
            AJX
          </Box>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton
            display={{ base: "inherit", lg: "none" }}
            as={IconButton}
            fontSize={"xl"}
            aria-label="Options"
            icon={<IoReorderThree />}
          />
          <MenuList
            bgGradient="linear(to-r, #D4F3EF, #30475E)"
            border={"none"}
            shadow={"none"}
          >
            <MenuItem
              icon={<IoPersonOutline />}
              fontWeight={"semibold"}
              onClick={() => {
                document.getElementById("contacts").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contacts
            </MenuItem>
            <Link passHref href={"/faq"}>
              <MenuItem icon={<IoChatbubblesOutline />} fontWeight={"semibold"}>
                FAQs
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        {/* Responsive */}
        {/* For Responsive you can send any prop with json for base or other screensize
        like
        w={{base:"sm" lg:"xl"}} */}
        <HStack spacing="5" d={{ base: "none", lg: "inherit" }}>
          <Box
            fontWeight="semibold"
            fontSize="xl"
            textColor="gray.900"
            cursor="pointer"
            _hover={{
              textColor: `gray.700`,
            }}
            onClick={() => {
              document.getElementById("contacts").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </Box>
          <Link passHref href={"/faq"}>
            <Box
              fontWeight="semibold"
              fontSize="xl"
              textColor="gray.900"
              cursor="pointer"
              _hover={{
                textColor: `gray.700`,
              }}
            >
              FAQs
            </Box>
          </Link>
        </HStack>
      </HStack>
    </div>
  );
}

export default Header;
