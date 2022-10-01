import { PopoverContent, PopoverBody, PopoverCloseButton, Text } from "@chakra-ui/react";

const Examples = () => {
  return (
    <PopoverContent _focus={{ outline: "hidden" }}>
      <PopoverCloseButton />
      <PopoverBody>
        <Text fontStyle="italic" fontSize="xl">Examples</Text>
        <Text fontSize="md">Great Pyramid of Giza- Lat: 29.9792, Lon: 31.13</Text>
        <Text fontSize="md">Vegas Strip- Lat: 36.11, Lon: 115.20</Text>
        <Text fontSize="md">Beijing- Lat: 39.9, Lon: 116.4</Text>
      </PopoverBody>
    </PopoverContent>
  )
}

export default Examples;
