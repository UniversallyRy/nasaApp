import { ChakraProvider, Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

const MotionBox = motion<BoxProps>(Box);

const NasaApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <MotionBox
        flexDirection="column"
        minH="100vh"
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionBox>
    </ChakraProvider>
  );
};

export default NasaApp;
