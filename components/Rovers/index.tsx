import { Box, useColorModeValue } from "@chakra-ui/react";
import { RoverPhotoType } from "../../utils/types";
import RoverList from "./RoverList";

type Props = {
  data: RoverPhotoType[];
};

const RoverContainer = ({ data }: Props) => {
  const color = useColorModeValue("blue.500", "purple.900");
  return (
    <Box
      w={{ base: "full", md: "2xl", lg: "3xl" }}
      h="100%"
      bg={color}
      shadow="lg"
      rounded="sm"
      p={1}
      align="center"
      justifyContent="center"
    >
      <RoverList data={data} />
    </Box>
  );
};

export default RoverContainer;
