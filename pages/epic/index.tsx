import useSwr from 'swr'
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, NextPage } from 'next';
import { apiKey } from '../../key'
import EpicList from '../../components/EpicList'

interface Data {
  title: string;
  date: number;
  explanation: string;
  hdurl: string;
  map: ((item: object) => void);
}

const url = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03?api_key=' + apiKey
const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

const Epics: NextPage<{ data: Data }> = ({data}) => {
  
    if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Earth Polychromatic Imaging Camera</title>
        <meta property="og:pic" content="Earth Polychromatic Imaging Camera Images" key={data.title} />
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
        <EpicList data={data}/>
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

export default Epics;