import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

const Custom404 = () => {
  return (
    <Box>
      <Head key="pages/404 key">
        <title>Page Not Found</title>
        <meta property="og:404" content="404" key={1} />
      </Head>
      <Text>404 - Page Not Found</Text>
    </Box>
  );
};

export default Custom404;
