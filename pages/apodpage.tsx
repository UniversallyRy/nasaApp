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
        <title>{ data.title }</title>
        <meta property="og:pic" content="Astronomy Picture of the Day" key={data.title} />
      </Head>
      <article>
        <h1>{ data.title }</h1>
        <p>{ data.date }</p>
        <p>{ data.explanation }</p>
        <div>
            <Image
                src={ data.hdurl }
                quality={ 100 }
                height={ 800 }
                width={ 800 }
                layout='responsive'
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                placeholder="blur"
                alt={ data.title }
            />
        </div>
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