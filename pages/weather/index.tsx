import NextLink from "next/link";
import Head from "next/head";
import { apiKey } from '../../key';
import { GetStaticProps, NextPage } from 'next';
import { Box, chakra, VStack, Stack, Link, Heading, HeadingProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import WeatherList from "../../components/WeatherList";

interface Data {
  url: string;
  title: string;
  explanation: string;
  date: number;
}
let url = `https://api.nasa.gov/insight_weather/?feedtype=json&api_key=` + `${apiKey}`;
const MotionHeading = motion<HeadingProps>(Heading);
const variants = {
  open: {
    y: 0,
    opacity: 0.2,
    transition: {
      y: { stiffness: 1000, velocity: -1000}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Weather: NextPage<{ data: Data }> = ({ data }:any) => {
    console.log(data)

  return (
    <VStack w="full" minH="100vh">
      <Head key="pages/apod key">
        <title>Insight on Mars Weather</title>
        <meta property="og:pic" content="Insight of Mars Weather" key={data.sols_keys} />
      </Head>
      <Box style={{margin: 10, color: 'black'}}>
      </Box>
      <NextLink href="/">
        <Link>
          <chakra.a>← Back to home</chakra.a>
        </Link>
      </NextLink>
      <MotionHeading
        mx={2}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3 }}
      >
        Weather insights
      </MotionHeading>
      <Stack spacing="28px" direction={["column", "column", "row"]}>
        <WeatherList
            data={data}
        />
      </Stack>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  };

  return {
    props: {
      data,
    },
  };
};

export default Weather;