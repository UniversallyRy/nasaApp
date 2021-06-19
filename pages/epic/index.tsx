import useSwr from 'swr'
import Image from "next/image";
import Link from "next/link";
import { apiKey } from '../../key'
import Head from "next/head";
import { GetStaticProps, NextPage } from 'next';

interface Data {
  title: string;
  date: number;
  explanation: string;
  hdurl: string;
  map: ((item: object) => void);
}

const url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03?api_key=' + apiKey
const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

const Epic: NextPage<{ data: Data }> = (props) => {
  
    if (!props.data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{props.data.title}</title>
      </Head>
      <article>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        {props.data.map((item:any, index:any) => (
          <div key={index}>
            <Link href={`/epic/${item.id = index}`}>
              <a>Date Taken: {item.date}</a>
            </Link>
            <h1>{item.caption}</h1>
            <Image
                priority
                src={imageLink + item.image + `.png`}
                height={600}
                width={600}
                alt={item.title}
            />
            <p>Lat: {item.centroid_coordinates.lat}</p>
            <p>Long: {item.centroid_coordinates.lon}</p>
            <p>- - - - - - - - - -</p>
        </div>
        ))}
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        

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