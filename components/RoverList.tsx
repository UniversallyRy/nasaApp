import RoverItem from './RoverItem';
import { useState, useMemo } from 'react';
import { Box, Flex, HStack, Select, Heading, Text, useColorModeValue, Stack } from '@chakra-ui/react';

type ListProps = {
  data: object[] | undefined
};

const RoverList  = ({ data }: ListProps) => {
    const [roverCamera, setCamera] = useState("FHAZ")

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

        if(data instanceof Array) { 
            data.map((item:any, index:any) => {
                if(item.camera.name === roverCamera) {
                    count++
                }
            })
        }

        return count;
    }

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

    const setSlide = (slide:number) => {
        setCurrentSlide(slide);
    };

    const handleChange = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const element = event.currentTarget as HTMLInputElement
        const value = element.value
        setCamera(value);
    };

    const memoedPhotos = useMemo(() => {
        let photosArray:any = []
        if(data instanceof Array){ 
            data.map(( item:any, index:number) => {
                if(item.camera.name == roverCamera) {
                    photosArray.push(
                        <RoverItem 
                            slidesCount={ slidesCount }
                            index={ photosArray.length }
                            key={ index } 
                            item={ item } 
                        />
                    )
                }
            })
        }
        return photosArray
    }, [data, slidesCount, roverCamera])

    return (
        <Stack
            flexDirection="column" 
            bg={useColorModeValue("gray.200", "gray.600")}
        >
            <Select value={roverCamera} onChange={handleChange} placeholder="Select Camera">
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
            </Select>
            <Heading> Images taken by the <a href="https://www.space.com/17963-mars-curiosity.html">Curiosity Rover</a></Heading>
            <Flex w="98vw" pos="relative" overflow="hidden">
                <Flex h="full" w="full" {...carouselStyle}>
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
                        if(slidesCount <= 10) {
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
                        }else{
                            return null
                        }
                    })}
                </HStack>
            </Flex>
        </Stack>
    )
};

export default RoverList;
