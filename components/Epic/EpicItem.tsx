import { Flex, VStack, Text } from "@chakra-ui/react";
import { ChakraNextImage } from "../Image";
import { reformatDate } from "../../utils/reformatDate";

type Props = {
  item: {
    title: string;
    image: string;
    date: string;
    caption: string;
    centroid_coordinates: {
      lat: string;
      lon: string;
    };
  };
  index: number;
  slidesCount: number;
};

const EpicItem = ({ ...props }: Props) => {
  const dateFormatter = props.item.date.slice(0, 10).split("-").join("/");
  const imageLink = `https://epic.gsfc.nasa.gov/archive/enhanced/${dateFormatter}/png/`;
  return (
    <Flex w="full" h="full">
      <Text pos="absolute" top="0" fontSize="xs" color="white" p={1} zIndex={1}>
        {props.index + 1} / {props.slidesCount}
      </Text>
      <ChakraNextImage
        boxSize={{ base: "md", sm: "xl", md: "2xl", lg: "3xl" }}
        p={3}
        rounded="sm"
        shadow="sm"
        src={imageLink + props.item.image + `.png`}
        placeholder="blur"
        alt={props.item.title}
      />
      <VStack
        pos="absolute"
        top="0"
        textAlign="center"
        width="50%"
        mt={{ base: "2", md: "1" }}
        color="purple.900"
        userSelect="none"
      >
        <Text fontSize={{ base: "xs", md: "sm" }}>
          Lat: {props.item.centroid_coordinates.lat}
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }}>
          Date Taken: {reformatDate(props.item.date)}
        </Text>
        <Text mt="2" fontSize={{ base: "xs", md: "md", xl: "lg" }}>
          {props.item.caption}
        </Text>
      </VStack>
    </Flex>
  );
};

export default EpicItem;
