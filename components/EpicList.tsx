import EpicItem from './EpicItem'
import { NextPage } from 'next';

interface Data {
  identifier: string;
  map: ((item: object) => void);
}

const EpicList: NextPage<{ data: Data }> = ({ data }:any) => {

  return (
    <>
      {data.map((item:any, index:any) => (
            <EpicItem 
              key={ item.identifier } 
              item={ item } 
              index={ index }
            />
        ))}
    </>
  )
}

export default EpicList
