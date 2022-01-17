import "../styles/globals.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* For React Slick */}
      {/* <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head> */}
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
export default MyApp;
