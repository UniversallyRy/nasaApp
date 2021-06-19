import useSwr from 'swr'
import Image from "next/image";
import Link from "next/link";
import { apiKey } from '../key'
import Head from "next/head";
import { GetStaticProps, NextPage } from 'next';

interface Data {
  title: string;
  date: number;
  explanation: string;
  hdurl: string;
}

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + `${apiKey}`

const APOD: NextPage<{ data: Data }> = ({ data }) => {
  
    if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article className='margin: 2'>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
        <div>
            <Image
                priority
                src={data.hdurl}
                height={600}
                width={800}
                alt={data.title}
            />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default APOD;