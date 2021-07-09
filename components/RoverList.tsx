import WeatherItem from './RoverItem';
import { NextPage } from 'next';
import {useState} from 'react';
import { Box, Flex, HStack, Select, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';


interface Data {
  map: ((item: object) => void);
}

const RoverList: NextPage<{ data: Data }> = ({ data }:any) => {
    const [roverCamera, setCamera] = useState("FHAZ")
    
    const getCount = () => {
        let count = 0;
        data.photos.map((item:any, index:any) => {
            if(item.camera.name === roverCamera) {
                count++
            }
        })
        return count;
    }
    const slidesCount = getCount();

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

    const [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide:any) => {
        setCurrentSlide(slide);
    };
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    
    const handleChange = (event: any) => {
        setCamera(event.target.value);
    };

    return (
        <VStack
            justifyContent="center" 
            w="full"
            bg={useColorModeValue("gray.200", "gray.600")}
            alignItems="center"
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
            <Flex w="full" pos="relative" overflow="hidden">
                <Flex h="full" w="full" {...carouselStyle}>
                    {data.photos.reduce((photosArray:object[], item:any, index:number) => {
                        if(item.camera.name === roverCamera) {
                            photosArray.push(
                                <WeatherItem 
                                slidesCount={ slidesCount }
                                index={ photosArray.length }
                                key={ index } 
                                item={ item } 
                                />
                            )
                        }
                        return photosArray
                    }, [])}
                </Flex>
                <Text userSelect="none" pos="absolute" {...arrowStyles} left="0" onClick={prevSlide}>
                &#10094;
                </Text>
                <Text userSelect="none" pos="absolute" {...arrowStyles} right="0" onClick={nextSlide}>
                &#10095;
                </Text>
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                    {Array.from({ length: slidesCount }).map((_, slide) => (
                        
                        <Box
                        key={`dots-${slide}`}
                        cursor="pointer"
                        boxSize={["7px", "15px"]}
                        m="0 2px"
                        bg={currentSlide === slide ? "gray.800" : "gray.500"}
                        rounded="50%"
                        display="inline-block"
                        transition="background-color 0.6s ease"
                        _hover={{ bg: "gray.800" }}
                        onClick={() => setSlide(slide)}
                        />
                ))}
                </HStack>
            </Flex>
        </VStack>
    )
};

export default RoverList;
