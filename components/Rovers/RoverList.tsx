import { useState, useMemo } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import RoverHeading from './RoverHeading';
import RoverItem from './RoverItem';
import { RoverProps } from "../../utils/types";

type ListProps = {
  data: RoverProps[]
};

const RoverList = ({ data }: ListProps) => {
  const [roverCamera, setCamera] = useState("FHAZ");

  const arrowStyles = {
    cursor: "pointer",
    top: "50%",
    w: "auto",
    mt: "-22",
    p: "16",
    color: "white",
    fontWeight: "bold",
    fontSize: "2xl",
    transition: "0.5s ease",
    borderRadius: "0 3px 3px 0",
    _hover: {
      opacity: 0.6,
      bg: "gray",
    },
  };

  const getCount = () => {

    let count = 0;

    if (data instanceof Array) {
      data.map((item: any, _index: any) => {
        if (item.camera.name === roverCamera) {
          count++
        }
      })
    };

    return count;
  };

  const slidesCount = getCount();

  const [currentSlide, setCurrentSlide] = useState(0);

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

  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };



  const memoedPhotos = useMemo(() => {
    const photosArray: any = []
    if (data instanceof Array) {
      data.map((item: any, index: number) => {
        if (item.camera.name == roverCamera) {
          photosArray.push(
            <RoverItem
              slidesCount={slidesCount}
              index={photosArray.length}
              key={index}
              item={item}
            />
          )
        }
      })
    }
    return photosArray
  }, [data, slidesCount, roverCamera]);

  return (
    <>
      <RoverHeading
        setCamera={setCamera}
      />
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex w="full" h="full" {...carouselStyle}>
          {memoedPhotos}
        </Flex>
        <Text userSelect="none" pos="absolute" {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text userSelect="none" pos="absolute" {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="3" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => {
            if (slidesCount <= 10) {
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", "10px", "15px"]}
                bg={currentSlide === slide ? "gray.800" : "gray.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: "gray.800" }}
                onClick={() => setSlide(slide)}
              />
            } else {
              return null
            }
          })}
        </HStack>
      </Flex>
    </>
  )
};

export default RoverList;
