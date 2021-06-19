
import Link from 'next/link'
import Image from 'next/image'

const imageLink =  'https://epic.gsfc.nasa.gov/archive/enhanced/2021/06/03/png/'

const EpicItem = ({item, index}:any) => {

    return (
        <>
            <Link href={`/epic/${item.id = index}`}>
              <a>Date Taken: {item.date}</a>
            </Link>
            <h1>{item.caption}</h1>
            <Image
                priority
                src={imageLink + item.image + `.png`}
                height={600}
                width={600}
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the Earth"
                placeholder="blur"
            />
            <p>Lat: {item.centroid_coordinates.lat}</p>
            <p>Long: {item.centroid_coordinates.lon}</p>
            <p>- - - - - - - - - -</p>
        </>  
    )
}

export default EpicItem
