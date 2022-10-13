import Image from "next/image";
import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
} & Omit<BoxProps, "as">;

export const ChakraNextImage = ({ src, alt, ...otherProps }: Props) => {
  return (
    <Box position="relative" {...otherProps}>
      <Image objectFit="contain" layout="fill" src={src} alt={alt} priority />
    </Box>
  );
};

export default ChakraNextImage;
