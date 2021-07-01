import EpicItem from './EpicItem'
import { NextPage } from 'next';
import { Grid } from '@chakra-ui/react';

interface Data {
  identifier: string;
  map: ((item: object) => void);
}

const EpicList: NextPage<{ data: Data }> = ({ data }:any) => {

  return (
    <Grid
    flexWrap="wrap" 
    justifyContent="center" 
    maxW="1000px"
    mb={10} 
    gap={10}
    >
      {data.map((item:any, index:any) => (
            <EpicItem 
              key={ item.identifier } 
              item={ item } 
              index={ index }
            />
        ))}
    </Grid>
  )
}

export default EpicList
