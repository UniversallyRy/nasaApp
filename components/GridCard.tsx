import React from "react";
import NextLink from "next/link";
import { chakra, Box, BoxProps, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box)

type CardProps = {
  title: string;
  paragraph: string;
  href: string;
}

const HomeCard = ({title, paragraph, href}:CardProps) => {
    return (
      <MotionBox
        w="100%" 
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.1, 1],
          rotate: [0, 1, -1, 0],
          transition: {
            duration: .2
          }
        }}
        mx={3}
        px={8}
        py={2}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
        flexBasis={['auto', '45%']}
      >
        <Box>
          <NextLink passHref href={href}>
            <Link
              fontSize="3xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              _hover={{
                color: useColorModeValue("gray.600", "gray.200"),
                textDecor: "underline",
              }}
            >
              {title}
            </Link>
          </NextLink>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {paragraph}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            Read more
          </Link>
        </Flex>
      </MotionBox>
    );
  };
  
  export default HomeCard;