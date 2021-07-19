import { GetStaticProps, NextPage } from 'next';
import Head from "next/head";
import NextLink from "next/link";
import { Stack, Box, Link } from "@chakra-ui/react";
import RoverList from '../../components/RoverList';
import { fetchedData } from '../../utils/endpoints';

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
const Rover: NextPage<{ data: Data }> = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <Box>
      <Head key='pages/rover key'>
        <title>Mars Rover Photos</title>
        <meta property="og:rover" content="Mars Rover Photos" key={2021} />
      </Head>
      <Stack align="center">
        <Box my={3}>
          <NextLink passHref href="/">
            <Link
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
      </Stack>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // last date with decent sized return json + avoiding empty dates
  const data = await fetchedData('rover', new Date(2021, 6, 17));
  return {
    props: {
      data,
    },
  };
};

export default Rover;