import WeatherItem from './WeatherItem';
import { NextPage } from 'next';
import { Grid } from '@chakra-ui/react';

interface Data {
  identifier: string;
  map: ((item: object) => void);
}

const WeatherList: NextPage<{ data: Data }> = ({ data }:any) => {
  return (
    <Grid
    flexWrap="wrap" 
    justifyContent="center" 
    maxW="1000px"
    mb={10} 
    gap={10}
    >
      {data.validity_checks.map((item:any, index:any) => (
        <WeatherItem 
          key={ index } 
          item={ item } 
          index={ index }
        />
      ))}
    </Grid>
  )
}

export default WeatherList;
