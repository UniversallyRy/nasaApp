import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { apiKey } from '../../key';
import { motion, useCycle } from 'framer-motion';


const listUrl = 'https://api.nasa.gov/planetary/apod?count=10&api_key=' + `${apiKey}`
import resData from './index'

export default function ApocId({ apod }:any) {
    const router = useRouter();
    const { id } = router.query;

    const transition = { duration: 0.5, ease: "easeInOut" };

    const postVariants = {
      initial: { y: 100, opacity: 0 },
      enter: { y: 0, opacity: 1, transition },
      exit: { y: -100, opacity: 0, transition }
    };
    return (
        <>
          <Head>
            <title>Earth Polychromatic Image</title>
            <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={apod.title} />
          </Head>
          <motion.div
          className="page"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={postVariants}
          >
            <div className="link-wrapper">
              <Link href="/apods">Back to Home page</Link>
            </div>
            <div className="post">
              <Image
                className="post__img"
                priority
                src={ apod.url }
                height={ 600 }  
                width={ 600 }
                alt={ apod.title }
              />
              <h1>{ apod.title }</h1>
              <p>Taken on: { apod.date }</p>
              <p>{ apod.explanation }</p>
            </div>
          </motion.div>
        </>
    )
}

export const getStaticProps = async (context:any) => {
    const res = await fetch(listUrl)
    const apod = await res.json();

    return {
      props: {
        apod: apod[`${ context.params.id }`],
      },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(listUrl);
    const apod = await res.json();
  
    const paths = resData.map((item:any, index:number) => ({
      params: { id: index.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  };