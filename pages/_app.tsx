import { ChakraProvider, Box, BoxProps } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.sass'

const MotionBox = motion<BoxProps>(Box)

const NasaApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <MotionBox
        key={router.route} 
        initial="pageInitial" 
        animate="pageAnimate" 
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
      }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionBox>
    </ChakraProvider>
  )
}
export default NasaApp
