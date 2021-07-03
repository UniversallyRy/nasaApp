import WeatherItem from './RoverItem';
import { NextPage } from 'next';
import { Grid } from '@chakra-ui/react';

interface Data {
  map: ((item: object) => void);
}

const RoverList: NextPage<{ data: Data }> = ({ data }:any) => {
    return (
        <Grid
            flexWrap="wrap" 
            justifyContent="center" 
            maxW="1000px"
            mb={10} 
            gap={10}
        >
        {data.photos.map((item:any, index:any) => (
            <WeatherItem 
            key={ index } 
            item={ item } 
            />
        ))}
        </Grid>
    )
};

export default RoverList;
