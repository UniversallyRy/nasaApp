import { NextPage } from 'next';
import Head from "next/head";
import { useState, createContext } from 'react';
import { Text, VStack, Stack, useColorModeValue } from "@chakra-ui/react";
import Container from "../../components/Sat";
import { ChakraNextImage } from "../../components/Image";
import AlertBox from "../../components/Sat/AlertBox";
import { reformatDate } from '../../utils/reformatDate';

// Todo: add searchable options
interface Data {
  date: string
  id: string
  resource: {
    dataset: string
    planet: string
  }
  ['service version']: string;
  url: string;
}

export const FormContext = createContext({});

const LandSat: NextPage<{ data: Data }> = () => {
  const [coordinates, submitCoords] = useState(Object);
  const color = useColorModeValue("blue.500", "purple.900");

  return (

    <Stack
      minH="100vh"
      align='center'
    >
      <Head key='pages/landsat key'>
        <title>Satellite Images</title>
        <meta property="og:landsat" content="Earth Polychromatic Imaging Camera Images" key={0} />
      </Head>
      <Stack m={3} spacing={10} direction={{ base: "column", md: "row" }}>
        <FormContext.Provider value={{ coordinates, submitCoords }}>
          <Container />
        </FormContext.Provider>
      </Stack>
      {coordinates.hasOwnProperty('msg')
        ? <AlertBox />
        : null
      }
      {coordinates.hasOwnProperty('url')
        ? <VStack m={2} shadow="xl" rounded="sm" bg={color} p={1}>
          <ChakraNextImage
            aria-label="Satellite Image"
            boxSize={{ base: "sm", sm: "md", md: "2xl", xl: "container.lg" }}
            src={coordinates.url}
            alt={coordinates.resource.dataset}
          />
          <Text m={2}>Date Taken: {reformatDate(coordinates.date)} </Text>
          <Text m={2}>Satellite: {coordinates.resource.dataset} </Text>
        </VStack>
        : null
      }
    </Stack>

  )
};

export default LandSat;
