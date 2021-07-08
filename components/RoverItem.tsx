
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";


const RoverItem = ({ item }:any) => {
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
            <Text m={2}>Date Taken: { item.earth_date }</Text>
            <Text m={2}>Sol: { item.sol }</Text>
            <Text m={2}>Camera: { item.camera.name }</Text>

            <Image
                rounded="lg"
                shadow="sm"
                priority
                src={ item.img_src }
                height={ 600 }
                width={ 600 }
                placeholder="blur"
                alt={ item.id }
            />
            
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

export default RoverItem;
