'use client'

import { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import useSWR from "swr";
import axios from "axios";
import { VStack, Box, Link } from "@chakra-ui/react";
import EpicList from "../../components/Epic/EpicList";
import ChangeDate from "../../components/ChangeDate";
import { fetchedUrl } from "../../utils/getData";

// todos: add datepicker and default to closest date
export default function Epics() {
  let { data, error } = useSWR('/api/epic', axios)
  console.log(data)
  const [initData, setData] = useState(undefined);
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    axios(fetchedUrl("epic", date))
      .then((res: any) => {
        setData(res.data);
      });
    setStartDate(date);
  };

  useEffect(() => {
    async function watcher() {
      if (initData == undefined) {
        const result = await data;
        setData(result);
      } else {
        return null;
      }
    };
    watcher();
  }, [data, initData]);

  console.log(initData)

  if (data == undefined) return <div> . . .Loading</div>
  if (error) return <div>failed to load</div>

  return (
    <Box justifyItems="center" alignItems="center">
      <Head key="pages/epic key">
        <title>Earth Polychromatic Imaging Camera</title>
        <meta
          property="og:pic"
          content="Earth Polychromatic Imaging Camera Images"
          key="epicmeta"
        />
      </Head>
      <ChangeDate selected={startDate} onChange={handleDateChange} />
      <VStack>
        <Box m={{ base: 20, sm: 10, lg: 2 }}>
          <NextLink passHref href="/" legacyBehavior>
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
        <EpicList data={initData?.data} />
      </VStack>
    </Box>
  );
};
