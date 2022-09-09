import Head from 'next/head';
import {
  Image,
  chakra,
  VStack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import HeroCard from '../components/HeroCard';
import { cardInfo, CardsInfo } from '../utils/cardInfo';


//todos: more global styling, more loading states, more animations
const Home = () => {
  const img = "../public/tim-tdd-QoewgBpXJd4-unsplash.jpg"

  const HeroCards = () => {
    let info = cardInfo.map((item: CardsInfo) => {
      return (
        <HeroCard
          href={item.href}
          title={item.title}
          paragraph={item.paragraph}
          imgSrc={item.imgSrc}
        />
      )
    });
    return info;
  }

  return (
    <Box background-image={img} align="center" justify="center" direction={{ base: "column", md: "row" }}>
      <Head key='pages/index key'>
        <title>NASA Info</title>
        <meta name="description" content="Look up information NASA provides" />
      </Head>
      <VStack mt={4}>
        <SimpleGrid
          gap={3}
          columns={[1, 1, 2,]}
        >
          {HeroCards()}
        </SimpleGrid>

        <VStack my={5}>
          <chakra.a
            href="https://verscel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <chakra.span>
              <Image src="/vercel.svg" alt="Vercel Logo" htmlWidth={72} htmlHeight={16} />
            </chakra.span>
          </chakra.a>
          <chakra.div>Hero icons made by <chakra.a href="https://www.freepik.com" title="Freepik">Freepik</chakra.a> from <chakra.a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</chakra.a></chakra.div>
        </VStack>
      </VStack>
    </Box>
  )
};

export default Home;

// 
