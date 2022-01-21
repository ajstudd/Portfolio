import React from "react";
import { Box } from "@chakra-ui/react";
function card() {
  return (
    <div>
      <Box
        // width="2xl"

        // bgGradient={[
        //   "linear(to-tr, teal.300, yellow.400)",
        //   "linear(to-t, blue.200, teal.500)",
        //   "linear(to-b, orange.100, purple.300)",
        // ]}
        bgGradient="linear(to-l, #ae00ff, #3897c7)"
        // bgGradient="linear(to-l, #7928CA, #FF0080)"
        // bg="white"
        height="3xs"
        shadow="lg"
        // border="2px"
        backdropFilter={{ blur: `16px` }}
        transition="all 0.3s"
        rounded="lg"
        opacity="30%"
        _hover={{ opacity: `50%`, transform: `scale(1.03)` }}
        blur="30px"
      ></Box>
    </div>
  );
}

export default card;
