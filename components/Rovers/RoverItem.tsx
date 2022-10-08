import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { ChakraNextImage } from "../Image";
import { RoverProps } from "../../utils/types";

type ItemProps = {
  item: RoverProps;
  index: number;
  slidesCount: number;
};

const RoverItem = ({ ...props }: ItemProps) => {
  return (
    <Box boxSize="full" fontSize="xl" flex="none" rounded="sm" shadow="lg">
      <Text ml={2} mt={7}>
        Date Taken: {props.item.earth_date}
      </Text>
      <Text m={2}>Sol: {props.item.sol}</Text>
      <Text m={2}>Camera: {props.item.camera.name}</Text>
      <Flex direction="row" pos="relative">
        <Text p="2" fontSize="xs" pos="absolute" top="0">
          {props.index + 1} / {props.slidesCount}
        </Text>
        <ChakraNextImage
          w="full"
          h={{ base: "60vh", sm: "70vh", md: "70vh" }}
          rounded="sm"
          shadow="sm"
          src={props.item.img_src}
          alt={`id + ${props.item.id}`}
        />
      </Flex>
    </Box>
  );
};

export default RoverItem;
