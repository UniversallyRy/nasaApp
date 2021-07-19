import React, { useState, useMemo } from "react";
import { NextPage } from 'next';
import { Flex, Box, HStack, Text, useColorModeValue, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import EpicItem from './EpicItem';
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

interface Data {
  title: string;
  date: number;
  length: number;
  explanation?: string;
  identifier?: string;
  hdurl?: string;
}

const EpicList: NextPage<{ data: Data }> = ({data}) => {
  const slidesCount = data.length
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowStyles = {
    cursor: "pointer",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };


  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide:any) => {
    setCurrentSlide(slide);
  };

  const memoedList = useMemo(() => {
    if(data instanceof Array){
      return data.map((item:any, index:any) => (
              <EpicItem 
                slidesCount={slidesCount}
                key={ item.identifier } 
                item={ item } 
                index={ index }
              />
      ))
    }else {
      return <Text>No Images</Text>
    }
  }, [data, slidesCount])

  return (
    <Box
      w={{base: "md", sm:"xl", md: "2xl", lg:"3xl"}}
      bg={useColorModeValue("gray.200", "gray.600")}
      p={1}
      alignItems="center"
      justifyContent="center"
    >
      {slidesCount > 0
      ?<Flex w="full" pos="relative" overflow="hidden">
        <Flex h="full" w="full" {...carouselStyle}>
        {memoedList}
        </Flex>
        <Text userSelect="none" pos="absolute" {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text userSelect="none" pos="absolute" {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="5" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", "15px"]}
              mx="1"
              bg={currentSlide === slide ? "gray.800" : "gray.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "gray.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
      :<Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No Images Found
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          No images taken on this date, try another!
        </AlertDescription>
      </Alert> 
    }
    </Box>
  )
}

export default EpicList;
