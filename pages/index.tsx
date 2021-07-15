import Head from 'next/head';
import { Image, chakra, VStack, Stack, Text, TextProps, Grid, Heading, useColorModeValue } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import GridCard from '../components/GridCard';
import Alien from '../components/alien';

const MotionText = motion<TextProps>(Text)
//todos: files cleanup, better structure, separate some of the util methods
const Home = () => {
  const bg = useColorModeValue("gray.200", "gray.600");
  return (
    <Stack align="center" w="full" minH="100vh" spacing="10" direction={["column", "column", "column", "column", "row", "row"]}>
      <Head key='pages/index key'>
        <title>NASA Info</title>
        <meta name="description" content="Look up information NASA provides" />
      </Head>
      <Alien
        //suggested min size of 100 to avoid bugs 
        size='300'
        bg={bg}
      />
        <VStack>
          <MotionText
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
            <Heading userSelect="none" m={10}>
              View Satellites, Rovers and other Astronomy
            </Heading>
          </MotionText>
        <Grid 
          flexWrap="wrap" 
          justifyContent="center" 
          maxW="full"
          mt="10" 
          gap={5}
        >
          <GridCard
            href='/apods'
            title='APOD &rarr;' 
            paragraph='View the Astronomy Picture of the Day.'
          />
          <GridCard 
            href='/earth'
            title='Earth &rarr;' 
            paragraph='Landsat imagery is provided to the public as a joint project between NASA and USGS.'
            />
          <GridCard 
            href='/epic'
            title='EPIC &rarr;' 
            paragraph='Earth Polychromatic Imaging Camera aka EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits.'
            />
          <GridCard 
            href='/rover'
            title='Mars Rover Photos &rarr;' 
            paragraph='Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit rovers on Mars.'
          />
          <GridCard 
            href='/'
            title='NASA Image and Video Library &rarr;' 
            paragraph='Earth Polychromatic Imaging Camera aka EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits.'
            />
        </Grid>

        <chakra.footer >
          <chakra.a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <chakra.span>
              <Image src="/vercel.svg" alt="Vercel Logo" htmlWidth={ 72 } htmlHeight={ 16 } />
            </chakra.span>
          </chakra.a>
        </chakra.footer>
      </VStack>
    </Stack>
  )
};

export default Home;