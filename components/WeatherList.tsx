import WeatherItem from './WeatherItem';
import { NextPage } from 'next';
import { Grid } from '@chakra-ui/react';

interface Data {
  map: ((item: object) => void);
}

const WeatherList: NextPage<{ data: Data }> = ({ data }:any) => {
    const dataPRE = data.validity_checks.sols_checked

    return (
        <Grid
            flexWrap="wrap" 
            justifyContent="center" 
            maxW="1000px"
            mb={10} 
            gap={10}
        >
        {dataPRE.map((item:any, index:any) => (
            <WeatherItem 
            key={ index } 
            itemName={ item }
            item={ data.validity_checks[item] } 
            />
        ))}
        </Grid>
    )
};

export default WeatherList;
