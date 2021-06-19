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

const url = 'https://epic.gsfc.nasa.gov/?date=2021-06-03'

const Epic: NextPage<{ data: Data }> = (props) => {
  
    if (!props.data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{props.data.title}</title>
      </Head>
      <article className='margin: 2'>
        <h1>{props.data.title}</h1>
        <p>{props.data.date}</p>
        <p>{props.data.caption}</p>
        <div>
            <Image
                priority
                src={props.data.hdurl}
                height={600}
                width={800}
                alt={props.data.title}
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

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Epic;