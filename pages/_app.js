import "../styles/globals.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
export default MyApp;
