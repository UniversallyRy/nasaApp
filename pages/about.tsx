import Head from "next/head";
import { Box, Text } from '@chakra-ui/react';

const about = () => {
    return (
        <Box w="full" minH="100vh" align="center">
            <Head key="pages/about index">
                <title>About</title>
                <meta property="og:about" content="About" key={1} />
            </Head>
            <Text>About</Text>    
        </Box>
    )
};

export default about;
