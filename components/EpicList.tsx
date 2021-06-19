import Link from 'next/link'
import Image from 'next/image'

const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

const EpicList = ({ data }:any) => {

  return (
    <>
      {data.map((item:any, index:any) => (
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
    </>
  )
}

export default EpicList
