import Head from "next/head";
import { Box, Text } from '@chakra-ui/react';

export default function Custom404() {
    return (
      <Box w="full" minH="100vh" align="center">
        <Head>
          <title>Page Not Found</title>
          <meta property="og:404" content="404" key={1} />
        </Head>
        <Text>404 - Page Not Found</Text>
      </Box>
    )
  }