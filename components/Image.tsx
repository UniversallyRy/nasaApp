import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  src: string
  alt: string
} & Omit<BoxProps, "as">

export const ChakraNextImage = ({ src, alt, ...rest }: Props) => {
  return (
    <Box h="100vh" w="100vw" alignSelf="center" position="relative" {...rest}>
      <Image
        objectFit="cover" 
        layout="fill"
        src={src} 
        alt={alt} />
    </Box>
  );
};

export default ChakraNextImage;