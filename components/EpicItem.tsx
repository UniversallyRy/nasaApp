import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { ChakraNextImage }  from "./Image";


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

const EpicItem = ({ ...props }: Props) => {   
    const dateFormatter = props.item.date.slice(0, 10).split('-').join('/')
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
                {props.index + 1} / {props.slidesCount}
            </Text>
            <ChakraNextImage
                rounded="lg"
                shadow="sm"
                boxSize="full"
                backgroundSize="auto"
                src={ imageLink + props.item.image + `.png` }
                placeholder="blur"
                alt={ props.item.title }
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
                <Text mt="2" fontSize={['xs', 'sm', 'md', 'xl']}>{ props.item.caption }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Lat: { props.item.centroid_coordinates.lat }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Long: { props.item.centroid_coordinates.lon }</Text>
                <Text fontSize={['xs', 'xs', 'sm', 'lg']}>Date Taken: { props.item.date }</Text>
            </VStack>
        </Box>  
    )
};

export default EpicItem;
