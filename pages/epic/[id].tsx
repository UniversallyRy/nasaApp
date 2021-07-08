import Head from "next/head";
import NextLink from "next/link";
import { Image, Box, Text, Link, Stack } from "@chakra-ui/react";
import { apiKey } from '../../key';
import {getStaticProps as IndexProps} from './index'

let url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03/?api_key=' + apiKey;

export default function EpicId({ epic }:any) {
  const dateFormatter = epic.date.slice(0, 10).split('-').join('/')
  const imageLink =  `https://epic.gsfc.nasa.gov/archive/enhanced/${dateFormatter}/png/`;

  return (
    <Box w="full" minH="100vh" align="center">
      <Head key='epic/id key'>
        <title>Earth Polychromatic Image</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={epic.title} />
      </Head>
      <Stack>
        <Image
          rounded="lg"
          shadow="lg"
          mt={5}
          src={ imageLink + epic.image + `.png` }
          height={ 800 }
          width={ 800 }
          alt={ epic.title }
        />
        <Text m={2}>Image&apos;s ID: { epic.identifier }</Text>
        <Text m={2}>Taken on: { epic.date }</Text>
        <NextLink passHref href="/epic">
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
            Back to EPICS
          </Link>
        </NextLink>
      </Stack>
    </Box>
  )
}

export const getStaticProps = async (context:any) => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      epic: data[`${ context.params.id }`],
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(url);
  const epics = await res.json();
  const paths = epics.map((item:any, index:number) => ({
    params: { id: index.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};