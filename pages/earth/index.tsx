
import Head from "next/head";
import NextLink from 'next/link';
import { Image, Link, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from 'next';
import { apiKey } from '../../key';

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
  
const url = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=` + `${apiKey}`;

const Earth: NextPage<{ data: Data }> = ({ data }:any) => {
  return (
    <Box
      mx={3}
      py={2}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      maxW="xl"
      align='center'
    >
      <Head key='pages/earth key'>
        <title>Satellite Images</title>
        <meta property="og:earth" content="Earth Polychromatic Imaging Camera Images" key={data.title} />
      </Head>
      <Image
        rounded="lg"
        shadow="sm"
        src={ data.url }
        height={ 600 }
        width={ 600 }
        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        placeholder="blur"
        alt={ 'item.title' }
      />
      <Text m={2}>Date Taken: {data.date} </Text>
      <Text m={2}>Satellite: {data.resource.dataset } </Text>
      <Text m={2}>Planet: {data.resource.planet} </Text>
      <NextLink passHref href={ `/earth   `}>
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
    </Box>  
  )
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(url);
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };
};

export default Earth;
