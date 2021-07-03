import { useRouter } from 'next/router';
import Head from "next/head";
import NextLink from "next/link";
import { apiKey } from '../../key';
import { Box, Image, BoxProps, Grid, Text, Link, Heading } from "@chakra-ui/react";
import { motion } from 'framer-motion';


const listUrl = 'https://api.nasa.gov/planetary/apod?count=10&api_key=' + `${apiKey}`;
const MotionBox = motion<BoxProps>(Box);

export default function ApocId({ apod }:any) {
  const transition = { duration: 0.5, ease: "easeInOut" };
  const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
  };

  return (
    <Box w="full" minH="100%" align="center">
      <Head>
        <title>Earth Polychromatic Image</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={apod.title} />
      </Head>
      <MotionBox
        initial="exit"
        animate="enter"
        exit="exit"
        variants={postVariants}
      >
        <NextLink passHref href="/apods">
          <Link>Back to Home page</Link>
        </NextLink>
        <Grid
          flexWrap="wrap" 
          justifyContent="center" 
          maxW="1000px"
          mt="10" 
          gap={5}
        > 
          <Image
            priority
            src={ apod.url }
            height={ 600 }  
            width={ 600 }
            alt={ apod.title }
          />
          <Heading as='h1'>{ apod.title }</Heading>
          <Text>Taken on: { apod.date }</Text>
          <Text>{ apod.explanation }</Text>
        </Grid>
      </MotionBox>
    </Box>
  )
}

export const getStaticProps = async (context:any) => {
  let res = await fetch(listUrl);
  let apod = await res.json();

    return {
      props: {
        apod: apod[`${ context.params.id }`],
      },
    };
};

// export const getStaticPaths = async () => {
//     const res = await fetch(listUrl);
//     const apod = await res.json();
  
//     const paths = resData.map((item:any, index:number) => ({
//       params: { id: index.toString() },
//     }));
//     return {
//       paths,
//       fallback: false,
//     };
//   };