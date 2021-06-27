import { motion } from 'framer-motion';
import Layout from '../components/Layout'
import '../styles/globals.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
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
    </motion.div>
  )
}
export default MyApp
