import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export const ChakraNextImage = ({ src, alt, ...rest }: { src: string; alt: string } & Omit<BoxProps, "as">) => {
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