import { useState, useEffect } from "react";
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from "next/head";
import NextLink from "next/link";
import useSWR from 'swr'
import { VStack, Box, Link } from "@chakra-ui/react";
import EpicList from '../../components/Epic/EpicList';
import ChangeDate from "../../components/ChangeDate";
import fetcher from '../../utils/fetcher';
import { fetchedData } from '../../utils/getData';

interface EpicsProps {
  data: {
    title: string
    date: number
    length: number
  }
}

// todos: add datepicker and default to closest date
const Epics: NextPage<EpicsProps> = props => {
  const { data } = useSWR('/api/epic', fetcher)
  const [initData, setData] = useState(props.data);
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return
    let newData = await fetchedData("epic", date);
    setStartDate(date);
    setData(newData);
  };

  useEffect(() => {
    const watcher = () => {
      if (data == initData) {
        return
      } else {
        setData(initData)
      }
    }
    return () => {
      watcher
    }
  }, [data, initData])

  return (
    <Box justify="center" align="center">
      <Head key='pages/epic key'>
        <title>Earth Polychromatic Imaging Camera</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={initData.title} />
      </Head>
      <ChangeDate
        selected={startDate}
        onChange={handleDateChange}
      />
      <VStack>
        <Box m={{ base: 20, sm: 10, lg: 2 }}>
          <NextLink passHref href="/">
            <Link
              bg="gray.600"
              px={3}
              py={4}
              fontWeight="semibold"
              shadow="xl"
              rounded="sm"
              _focus={{ outline: "hidden" }}
              _hover={{ bg: "gray.700", shadow: "2xl" }}
            >
              Back to Home
            </Link>
          </NextLink>
        </Box>
        <EpicList data={initData} />
      </VStack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (_context: GetStaticPropsContext) => {
  const data = await fetchedData('epic');
  return {
    props: {
      data,
    },
  };
};

export default Epics;
