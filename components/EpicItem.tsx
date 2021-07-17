import { Box, VStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
    item: {
        title: string 
        image: string 
        date: string
        caption: string
        centroid_coordinates: {
            lat: string
            lon: string
        }
    }
    index: number
    slidesCount: number
};

const EpicItem = ({ item, index, slidesCount }: Props) => {   
    const dateFormatter = item.date.slice(0, 10).split('-').join('/')
    const imageLink =  `https://epic.gsfc.nasa.gov/archive/enhanced/${dateFormatter}/png/`;

    return (
        <Box    
            boxSize="full"
            flex="none"
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
        >
            <Text
                pos="absolute"
                top="0"
                fontSize="xs"
                color="white"
                p="3"
            >
                {index + 1} / {slidesCount}
            </Text>
            <Image
                rounded="lg"
                shadow="sm"
                boxSize="full"
                backgroundSize="auto"
                src={ imageLink + item.image + `.png` }
                placeholder="blur"
                alt={ item.title }
            />
            <VStack 
                pos="absolute"
                top="0"
                textAlign="center"
                w="full"
                mt="4"
                color="green.900"
                userSelect="none"
            >
                <Text mt="2" fontSize={['xs', 'sm', 'md', 'xl']}>{ item.caption }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Lat: { item.centroid_coordinates.lat }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Long: { item.centroid_coordinates.lon }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Date Taken: { item.date }</Text>
            </VStack>
        </Box>  
    )
};

export default EpicItem;
