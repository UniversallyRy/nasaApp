import Head from 'next/head';
import { Image, chakra, VStack, Stack, Text, TextProps, SimpleGrid, Heading, useColorModeValue } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import HeroCard from '../components/HeroCard';
import AlienHead from '../components/AlienHead';

const MotionText = motion<TextProps>(Text)
//todos: files cleanup, better structure, separate some of the util methods
const Home = () => {
  const backGround = useColorModeValue("gray.200", "gray.600");
  return (
    <Stack align="center" w="full" minH="100vh" spacing="10" direction={["column", "column", "column", "column", "row", "row"]}>
      <Head key='pages/index key'>
        <title>NASA Info</title>
        <meta name="description" content="Look up information NASA provides" />
      </Head>
      <AlienHead
        //suggested min size of 100 to avoid bugs 
        headSize='300'
        headColor={backGround}
      />
        <VStack justify='center'>
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
        <SimpleGrid 
          gap={3}
          columns={[1, 1, 2,]}
        >
          <HeroCard
            href='/apods'
            title='APOD &rarr;' 
            paragraph='View the Astronomy Picture of the Day.'
            imgSrc='/apod.png'
          />
          <HeroCard 
            href='/earth'
            title='Earth &rarr;' 
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
            paragraph='Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit rovers on Mars.'
            imgSrc='/mars-rover.png'
          />
        </SimpleGrid>

        </VStack>
        <VStack mt={5}>
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
    </Stack>
  )
};

export default Home;