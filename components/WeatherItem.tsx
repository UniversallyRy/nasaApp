
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";


const EpicItem = ({ item, itemName }:any) => {
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
            <Heading>Sol: {itemName}</Heading>
            <Text m={2}>PRE: { item.PRE.sol_hours_with_data }</Text>
            {item.HWS !=undefined
            ?<Text m={2}>HWS: { item.HWS.sol_hours_with_data }</Text>
            : undefined
            }
            {item.AT !=undefined
            ?<Text m={2}>AT: { item.AT.sol_hours_with_data }</Text>
            : undefined
            }
            {item.WD !=undefined
            ?<Text m={2}>HWS: { item.WD.sol_hours_with_data }</Text>
            : undefined
            }
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
