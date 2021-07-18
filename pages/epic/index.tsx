import { GetStaticProps } from 'next';
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";
import { VStack, Box, Link } from "@chakra-ui/react";
import EpicList from '../../components/EpicList';
import ChangeDate from "../../components/ChangeDate";

interface EpicsProps {
  data: {
    title: string
    date: number
    length: number
  }
};

const url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-07-05?api_key=' + process.env.API_KEY;

const fetchedUrl = (date = new Date()): string => {
  let day, month, year, newDay, newMonth;
  let thisDate = date;
  [year, month, day] = [thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate()];
  newDay = day.toString().padStart(2, '0');
  newMonth = month.toString().padStart(2, '0');
  let newDate = [year, newMonth, newDay].join('-');
  const fetched = `https://epic.gsfc.nasa.gov/api/enhanced/date/${newDate}?api_key=` + process.env.API_KEY;

  return fetched;
};

// todos: add datepicker and default to closest date
const Epics = ({ data }: EpicsProps) => {
  const [fetchedData, setData]  = useState(data);
  
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = async (date:Date) => {
    if (new Date() < date) return ;
    const url = fetchedUrl(date);
    const res = await fetch(url);
    const data = await res.json();
    setStartDate(date);
    setData(data);
  }

  if (data.length < 1) return <div>Loading...</div>;

  return (
    <VStack align="center" minH="100vh">
      <Head key='pages/epic key'>
        <title>Earth Polychromatic Imaging Camera</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={data.title} />
      </Head>
      <ChangeDate 
        selected={startDate} 
        onChange={handleDateChange} 
      />
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
        <EpicList data={fetchedData}/>
      </VStack>
    </VStack>
  );
};

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