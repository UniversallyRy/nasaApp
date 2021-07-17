import { GetStaticProps, NextPage } from 'next';
import Head from "next/head";
import NextLink from "next/link";
import { Flex, VStack, Box, Link } from "@chakra-ui/react";
import { apiKey } from '../../key';
import RoverList from '../../components/RoverList';

interface Data {
  photos?: object[]
  title: string;
  date: number;
  explanation: string;
  identifier: string;
  hdurl: string;
  map: ((item: object) => void);
}
//todos: expansion on components/pages?, rover camera choices, style fixes 
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-7-2&api_key=' + apiKey;

const Rover: NextPage<{ data: Data }> = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <Flex>
      <Head key='pages/rover key'>
        <title>Mars Rover Photos</title>
        <meta property="og:rover" content="Mars Rover Photos" key={2021} />
      </Head>
      <VStack>
        <Box m={20}>
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
        <RoverList data={data.photos}/>
      </VStack>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Rover;