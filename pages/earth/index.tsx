
import Head from "next/head";
import NextLink from 'next/link';
import { useState, createContext } from 'react'
import { Image, Link, Text, useColorModeValue, Box, VStack, Stack } from "@chakra-ui/react";
import { NextPage } from 'next';
import FormikForm, {AlertBox} from "../../components/EarthSatForm";

// Take off default and add searchable options
interface Data {
  date: string;
  id: string;
  resource: {
    dataset: string;
    planet: string;
  }
  ['service version']: string;
  url: string;
}

export const FormContext = createContext({});

const Earth: NextPage<{ data: Data }> = () => {
  const [newData, setData]:any = useState({})

  return (
    <Box
      minH="100vh"
      minW="100vw"
      rounded="lg"
      shadow="lg"
      maxW="xl"
      align='center'
    >
      <Head key='pages/earth key'>
        <title>Satellite Images</title>
        <meta property="og:earth" content="Earth Polychromatic Imaging Camera Images" key={0} />
      </Head>
      <Stack m={3} spacing="20px" direction={["column", "column", "row"]}>
        <VStack m={4}>
          <Text>Examples:</Text>
          <Text>Great Pyramid of Giza- Lat: 29.9792, Lon: 31.13</Text>
          <Text>Vegas Strip- Lat: 36.11, Lon: 115.20</Text>
          <Text>Beijing- Lat: 39.9, Lon: 116.4</Text>
        </VStack>
        <FormContext.Provider value={{ newData, setData }}>
          <FormikForm />
        </FormContext.Provider>
      </Stack>
        {newData.hasOwnProperty('msg')
          ?<AlertBox/>
          : null
        }
        {newData.hasOwnProperty('url')
        ?<VStack>
          <Image
            rounded="lg"
            shadow="sm"
            src={ newData.url }
            height={ 600 }
            width={ 600 }
            blurdataurl="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            placeholder="blur"
            alt={ newData.resource.dataset }
          />
          <Text m={2}>Date Taken: {newData.date} </Text>
          <Text m={2}>Satellite: {newData.resource.dataset } </Text>
         
        <NextLink passHref href={ `/earth`}>
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
        </NextLink>
      </VStack>
       :null
      }
    </Box>  
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
