import Head from "next/head";
import { ChakraNextImage }  from "../../components/Image";
import { useState, createContext } from 'react';
import { Text, VStack, Stack, useColorModeValue } from "@chakra-ui/react";
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
  const backGround = useColorModeValue("blue.500", "purple.900");
  
  return (
    <Stack
      w="95vw"
      minH="100vh"
      align='center'
    >
      <Head key='pages/landsat key'>
        <title>Satellite Images</title>
        <meta property="og:landsat" content="Earth Polychromatic Imaging Camera Images" key={0} />
      </Head>
      <Stack m={3} spacing={10} direction={{base:"column", md:"row"}}>
        <VStack p={1} borderRadius="md" bg={backGround} shadow="lg" mx={4}>
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
          ?<VStack shadow="xl" rounded="sm" bg={backGround} p={1}>
              <ChakraNextImage
                aria-label="Satellite Image"
                boxSize={{base:"md", md: "2xl", xl:"container.lg"}}
                src={ coordinates.url }
                alt={ coordinates.resource.dataset }
              />
              <Text m={2}>Date Taken: {coordinates.date} </Text>
              <Text m={2}>Satellite: {coordinates.resource.dataset } </Text>
          </VStack>
          : null
      }
    </Stack>  
  )
};

export default LandSat;
