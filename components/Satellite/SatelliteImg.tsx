import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import ChakraNextImage from "../Image";
import { reformatDate } from "../../utils/reformatDate";
import { CoordinateProps } from "../../utils/types";

type ImgProps = {
  coordinates: CoordinateProps;
};

const SatelliteImg = ({ coordinates }: ImgProps) => {
  const color = useColorModeValue("blue.500", "purple.900");
  return (
    <VStack m={2} shadow="xl" rounded="sm" bg={color} p={1}>
      <ChakraNextImage
        aria-label="Satellite Image"
        boxSize={{ base: "sm", sm: "md", md: "2xl", xl: "container.lg" }}
        src={coordinates.url}
        alt={coordinates.resource.dataset}
      />
      <Text m={2}>Date Taken: {reformatDate(coordinates.date)} </Text>
      <Text m={2}>Satellite: {coordinates.resource.dataset} </Text>
    </VStack>
  );
};

export default SatelliteImg;
