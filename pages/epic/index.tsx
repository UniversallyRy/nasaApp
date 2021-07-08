import { GetStaticProps, NextPage } from 'next';
import Head from "next/head";
import NextLink from "next/link";
import { Flex, VStack, Box, Link } from "@chakra-ui/react";
import { apiKey } from '../../key';
import EpicList from '../../components/EpicList';

interface Data {
  title: string;
  date: number;
  explanation: string;
  identifier: string;
  hdurl: string;
  map: ((item: object) => void);
}

const url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03?api_key=' + apiKey;
// todos: add datepicker and default to closest date
const Epics: NextPage<{ data: Data }> = ({data}) => {
  
  if (!data) return <div>Loading...</div>;

  return (
    <Flex>
      <Head key='pages/epic key'>
        <title>Earth Polychromatic Imaging Camera</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={data.title} />
      </Head>
      <VStack>
        <Box m={10}>
          <NextLink passHref href="/">
            <Link
              mt={3}
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.400" }}
            >
              Back to Home
            </Link>
          </NextLink>
        </Box>
        <EpicList data={data}/>
      </VStack>
    </Flex>
  );
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

export default Epics;