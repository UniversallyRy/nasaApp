import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { apiKey } from '../../key';

const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'
const url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03/?api_key=' + apiKey

export default function EpicId({ epic }:any) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <Head>
              <title>Earth Polychromatic Image</title>
              <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={epic.title} />
            </Head>
            <Image
                priority
                src={ imageLink + epic.image + `.png` }
                height={ 600 }
                width={ 600 }
                alt={ epic.title }
            />
            <p>Image ID: { epic.identifier }</p>
            <p>Taken on: { epic.date }</p>
            <p>At index: { id }  </p>
            <Link href="/epic">
              <a>← Back to EPICS</a>
            </Link>
        </div>
    )
}

export const getStaticProps = async (context:any) => {
    const res = await fetch(url)
    const epic = await res.json();

    return {
      props: {
        epic: epic[`${ context.params.id }`],
      },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(url);
    const epics = await res.json();
  
    const paths = epics.map((item:any, index:number) => ({
      params: { id: index.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  };