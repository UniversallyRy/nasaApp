import React from "react";
import NextLink from "next/link";
import { chakra, Box, BoxProps, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { motion } from 'framer-motion';


type CardProps = {
  title: string;
  paragraph: string;
  href: string;
}

const MotionBox = motion<BoxProps>(Box)

const HomeCard = ({title, paragraph, href}:CardProps) => {
  const bg = useColorModeValue("blue.500", "purple.900");

  return (
    <MotionBox
      whileHover={{
        position: 'relative',
        zIndex: 1,
        scale: [1, 1.15, 1],
        transition: {
        duration: .2
        }
      }}
      mx={3}
      px={8}
      py={2}
      rounded="sm"
      shadow="lg"
      bg={bg}
      maxW="xl"
      flexBasis={['auto', '45%']}
    >
      <Box>
        <NextLink passHref href={href}>
          <Link
            fontSize={["xl", "2xl"]}
            color={useColorModeValue("gray.700", "white")}
            fontWeight="bold"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {title}
          </Link>
        </NextLink>
        <chakra.p fontSize={["xs", "sm", "md"]} mt={2} color={useColorModeValue("gray.600", "gray.300")}>
          {paragraph}
        </chakra.p>
      </Box>
    </MotionBox>
  );
};
  
export default HomeCard;