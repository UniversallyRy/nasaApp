
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";


const RoverItem = ({ item, index, slidesCount }:any) => {
    return (
        <Box
            boxSize="full"
            fontSize="xl"
            flex="none"
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
        >
            <Text ml={2} mt={7}>Date Taken: { item.earth_date }</Text>
            <Text m={2}>Sol: { item.sol }</Text>
            <Text m={2}>Camera: { item.camera.name }</Text>

            <Image
                rounded="lg"
                shadow="sm"
                src={ item.img_src }
                boxSize="full"
                backgroundSize="cover"
                placeholder="blur"
                alt={ item.id }
            />
            <Text
                color="white"
                fontSize="xs"
                p="2"
                pos="absolute"
                top="0"
            >
                {index + 1} / {slidesCount}
            </Text>
            
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
