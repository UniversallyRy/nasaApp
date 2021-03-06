import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  src: string
  alt: string
} & Omit<BoxProps, "as">

export const ChakraNextImage = ({ src, alt, ...rest }: Props) => {
  return (
    <Box position="relative" {...rest}>
      <Image
        objectFit="contain" 
        layout="fill"
        src={src} 
        alt={alt} 
      />
    </Box>
  );
};

export default ChakraNextImage;