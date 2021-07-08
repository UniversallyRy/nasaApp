
import NextLink from 'next/link';
import { Box, VStack, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";


const EpicItem = ({ item, index }:any) => {   
    const dateFormatter = item.date.slice(0, 10).split('-').join('/')
    const imageLink =  `https://epic.gsfc.nasa.gov/archive/enhanced/${dateFormatter}/png/`;

    return (
        <Box
            mx={1}
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
            maxW="xl"
            align='center'
        >
            <Image
                rounded="lg"
                shadow="sm"
                src={ imageLink + item.image + `.png` }
                height={ 600 }
                width={ 600 }
                placeholder="blur"
                alt={ item.title }
                />
            <VStack m={1}>
                <Text m={5} size='sm'>{ item.caption }</Text>
                <Text m={1}>Lat: { item.centroid_coordinates.lat }</Text>
                <Text m={1}>Long: { item.centroid_coordinates.lon }</Text>
                <Text m={1}>Date Taken: { item.date }</Text>
                <NextLink passHref href={ `/epic/${ item.id = index }`}>
                    <Link
                        mt={5}
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
                </NextLink>
            </VStack>
        </Box>  
    )
};

export default EpicItem;
