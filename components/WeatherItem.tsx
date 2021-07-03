
import NextLink from 'next/link';
import { Box, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";


const EpicItem = ({ item, index }:any) => {
    return (
        <Box
            mx={3}
            py={2}
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
            maxW="xl"
            align='center'
        >
            <Heading>Item</Heading>
            <Text m={2}>PRE: { item.PRE[0].sol_hours_with_data }</Text>
            {/* <NextLink passHref href={ `/epic/${ item.id = index }`}>
                <Link
                    m={3}
                    bg="black"
                    color="gray.100"
                    px={5}
                    py={3}
                    fontWeight="semibold"
                    rounded="lg"
                    _hover={{ bg: "gray.900" }}
                >
                    View Solo
                </Link>
          </NextLink> */}
        </Box>  
    )
};

export default EpicItem;
