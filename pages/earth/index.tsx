import Head from "next/head";
import { ChakraNextImage }  from "../../components/Image";
import { useState, createContext } from 'react'
import { Text, Box, VStack, Stack } from "@chakra-ui/react";
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
}

export const FormContext = createContext({});

const Earth: NextPage<{ data: Data }> = () => {
  const [newImage, setImage] = useState(Object)
console.log(newImage)
  return (
    <Stack
      minH="100vh"
      minW="full"
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
        <FormContext.Provider value={{ newImage, setImage }}>
          <FormikForm />
        </FormContext.Provider>
      </Stack>
        {newImage.hasOwnProperty('msg')
          ?<AlertBox/>
          : null
        }
        {newImage.hasOwnProperty('url')
        ?<VStack>
          <ChakraNextImage
            aria-label="Satellite Image"
            boxSize="container.md"
            rounded="lg"
            shadow="xl"
            src={ newImage.url }
            alt={ newImage.resource.dataset }
          />
          <Text m={2}>Date Taken: {newImage.date} </Text>
          <Text m={2}>Satellite: {newImage.resource.dataset } </Text>
         
        {/* <NextLink passHref href={ `/earth`}>
          <Link
            mt={3}
            bg="black"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.900" }}
          >
            View Solo
          </Link>
        </NextLink> */}
      </VStack>
       :null
      }
    </Stack>  
  )
}
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(url);
//   const data = await res.json();
  
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Earth;
