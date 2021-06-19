import { useRouter } from 'next/router'
import { apiKey } from '../../key'
import Link from "next/link";
import Image from "next/image";

const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

export default function EpicId({ epic }:any) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <Image
                priority
                src={imageLink + epic.image + `.png`}
                height={600}
                width={600}
                alt={epic.title}
            />
            <p>Image ID: {epic.identifier}</p>
            <p>Taken on: {epic.date}</p>
            <p>At index: {id} </p>
          <Link href="/epic">
            <a>← Back to EPICS</a>
          </Link>
        </div>
    )
}

export const getServerSideProps = async (context:any) => {
    const res = await fetch(
      `https://epic.gsfc.nasa.gov/api/enhanced/date/2021-06-03/?api_key=` + apiKey + `${context.params.id}`
    );
    const epic = await res.json();

    return {
      props: {
        epic: epic[`${context.params.id}`],
      },
    };
  };