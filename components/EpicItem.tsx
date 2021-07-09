
import NextLink from 'next/link';
import { useState } from "react";
import { Box, VStack, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";


const EpicItem = ({ item, index, slidesCount }:any) => {   
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
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
            >
                {index + 1} / {slidesCount}
            </Text>
            <Image
                rounded="lg"
                shadow="sm"
                boxSize="full"
                backgroundSize="cover"
                src={ imageLink + item.image + `.png` }
                placeholder="blur"
                alt={ item.title }
                />
            <VStack 
                pos="absolute"
                top="0"
                bottom="24px"
                textAlign="center"
                w="full"
                mt="4"
                color="green.900"
                userSelect="none"
            >
                <Text m={2} size='lg'>{ item.caption }</Text>
                <Text>Lat: { item.centroid_coordinates.lat }</Text>
                <Text>Long: { item.centroid_coordinates.lon }</Text>
                <Text>Date Taken: { item.date }</Text>
            </VStack>
        </Box>  
    )
};

export default EpicItem;
