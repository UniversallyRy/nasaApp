import React from "react";
import NextLink from "next/link";
import Image from 'next/image'
import { chakra, Box, BoxProps, Stack, useColorModeValue, Link } from "@chakra-ui/react";
import { motion } from 'framer-motion';

type CardProps = {
  title: string;
  paragraph: string;
  href: string;
  imgSrc: string
};

const MotionBox = motion<BoxProps>(Box);

const HeroCard = ({ ...props }: CardProps) => {
  
  const backGround = useColorModeValue("blue.500", "purple.900");

  return (
    <MotionBox
      whileHover={{
        position: 'relative',
        zIndex: "auto",
        scale: [1, 1.15, 1],
        transition: {
        duration: .2
        }
      }}
      mx={1}
      rounded="sm"
      shadow="xl"
      bg={backGround}
      boxSize={{ base: "md", md: "sm", lg: "md" }}
    >
      <Stack spacing={2} align="center"p={3}>
        <Image
          width='200'
          height='200'
          src={props.imgSrc}
          alt="Icon made by Freepik from www.flaticon.com"
        />
        <NextLink passHref href={props.href}>
          <Link
            fontSize={["xl", "2xl"]}
            color={useColorModeValue("gray.700", "white")}
            fontWeight="bold"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {props.title}
          </Link>
        </NextLink>
        <chakra.p fontSize={{base: 'md', md: "lg"}} m={5} color={useColorModeValue("gray.600", "gray.300")}>
          {props.paragraph}
        </chakra.p>
      </Stack>
    </MotionBox>
  );
};
  
export default HeroCard;