import Head from 'next/head';
import { Image, chakra, VStack, Box, HeadingProps, Text, SimpleGrid, Heading } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import HeroCard from '../components/HeroCard';

const MotionHeading = motion<HeadingProps>(Heading)
//todos: more global styling, more loading states, more animations, better structure, separate some of the util methods
const Home = () => {
  return (
    <Box align="center" justify="center" direction={{ base: "column", md: "row" }}>
      <Head key='pages/index key'>
        <title>NASA Info</title>
        <meta name="description" content="Look up information NASA provides" />
      </Head>
        <VStack>
          <MotionHeading
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4
                }
              },
            }}
          >
            <Text fontSize="3xl" userSelect="none" my={5}>
              View Satellites, Rovers and other Astronomy
            </Text>
          </MotionHeading>
        <SimpleGrid 
          gap={3}
          columns={[1, 1, 2,]}
        >
          <HeroCard
            href='/apod'
            title='APoD &rarr;' 
            paragraph='View the Astronomy Picture of the Day.'
            imgSrc='/apod.png'
          />
          <HeroCard 
            href='/landsat'
            title='Landsat &rarr;' 
            paragraph='Landsat imagery is provided to the public as a joint project between NASA and USGS.'
            imgSrc='/satellite.png'
            />
          <HeroCard 
            href='/epic'
            title='EPIC &rarr;' 
            paragraph='Earth Polychromatic Imaging Camera aka EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits.'
            imgSrc='/planet.png'
            />
          <HeroCard 
            href='/rover'
            title='Mars Rover Photos &rarr;' 
            paragraph='Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit rovers on Mars. Current functionality only for Curiosity camera.'
            imgSrc='/mars-rover.png'
          />
        </SimpleGrid>

        <VStack my={5}>
          <chakra.a
            href="https://verscel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <chakra.span>
              <Image src="/vercel.svg" alt="Vercel Logo" htmlWidth={ 72 } htmlHeight={ 16 } />
            </chakra.span>
          </chakra.a>
          <chakra.div>Hero icons made by <chakra.a href="https://www.freepik.com" title="Freepik">Freepik</chakra.a> from <chakra.a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</chakra.a></chakra.div>
        </VStack>
      </VStack>
    </Box>
  )
};

export default Home;