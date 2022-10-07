import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

const about = () => {
  return (
    <Box w="full" minH="100vh" align="center">
      <Head key="pages/about index">
        <title>About</title>
        <meta property="og:about" content="About" key={1} />
      </Head>
      <Text>
        App made to view information provided by{" "}
        <a href="https://api.nasa.gov/">NASA&apos;s APIs</a>
      </Text>
    </Box>
  );
};

export default about;
