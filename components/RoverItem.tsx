import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ChakraNextImage } from "./Image";

type ItemProps = {
    item: {
        earth_date: string
        sol: string
        camera: {
            name: string
        }
        img_src: string
        id: string
    }
    index: number
    slidesCount: number
};

const RoverItem = ({ ...props }: ItemProps) => {
    return (
        <Box 
            boxSize="full"
            fontSize="xl"
            flex="none"
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
        >
            <Text ml={2} mt={7}>Date Taken: { props.item.earth_date }</Text>
            <Text m={2}>Sol: { props.item.sol }</Text>
            <Text m={2}>Camera: { props.item.camera.name }</Text>

            <ChakraNextImage
                w={{base:"full", md: "full"}} 
                h={{base:"70vh", md: "90vh"}}
                rounded="lg"
                shadow="sm"
                src={ props.item.img_src }
                alt={ props.item.id }
            />
            <Text
                color="white"
                fontSize="xs"
                p="2"
                pos="absolute"
                top="0"
            >
                {props.index + 1} / {props.slidesCount}
            </Text>
        </Box>  
    )
};

export default RoverItem;
