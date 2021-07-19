import Head from "next/head";
import { ChakraNextImage }  from "../../components/Image";
import { useState, createContext } from 'react';
import { Text, VStack, Stack, Fade, useDisclosure } from "@chakra-ui/react";
import { NextPage } from 'next';
import FormikForm, { AlertBox } from "../../components/EarthSatForm";

// Take off default and add searchable options
interface Data {
  date: string
  id: string
  resource: {
    dataset: string
    planet: string
  }
  ['service version']: string;
  url: string;
};

export const FormContext = createContext({});

const LandSat: NextPage<{ data: Data }> = () => {
  const [coordinates, submitCoords] = useState(Object)
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack
      minH="100vh"
      align='center'
    >
      <Head key='pages/earth key'>
        <title>Satellite Images</title>
        <meta property="og:earth" content="Earth Polychromatic Imaging Camera Images" key={0} />
      </Head>
      <Stack m={3} spacing={10} direction={{base:"column", md:"row"}}>
        <VStack m={4}>
          <Text fontSize="xl">Examples:</Text>
          <Text fontSize="md">Great Pyramid of Giza- Lat: 29.9792, Lon: 31.13</Text>
          <Text fontSize="md">Vegas Strip- Lat: 36.11, Lon: 115.20</Text>
          <Text fontSize="md">Beijing- Lat: 39.9, Lon: 116.4</Text>
        </VStack>
        <FormContext.Provider value={{ submitCoords }}>
          <FormikForm />
        </FormContext.Provider>
      </Stack>
        {coordinates.hasOwnProperty('msg')
          ?<AlertBox/>
          : null
        }
        {coordinates.hasOwnProperty('url')
          ?<Fade in={isOpen}>
            <VStack>
              <ChakraNextImage
                aria-label="Satellite Image"
                boxSize={{base:"lg", md: "2xl", xl:"container.lg"}}
                rounded="lg"
                shadow="xl"
                src={ coordinates.url }
                alt={ coordinates.resource.dataset }
              />
              <Text m={2}>Date Taken: {coordinates.date} </Text>
              <Text m={2}>Satellite: {coordinates.resource.dataset } </Text>
            </VStack>
          </Fade>
          : null
      }
    </Stack>  
  )
};

export default LandSat;
