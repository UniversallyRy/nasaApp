import WeatherItem from './RoverItem';
import { NextPage } from 'next';
import {useState} from 'react';
import { Grid, Select } from '@chakra-ui/react';


interface Data {
  map: ((item: object) => void);
}

const RoverList: NextPage<{ data: Data }> = ({ data }:any) => {
    const [roverCamera, setCamera] = useState("FHAZ")
 
    const handleChange = (event: any) => {
        setCamera(event.target.value);
    };

    return (
        <Grid
            flexWrap="wrap" 
            justifyContent="center" 
            maxW="1000px"
            mb={10} 
            gap={10}
        >
            <Select value={roverCamera} onChange={handleChange} placeholder="Select Camera">
                <option value="FHAZ">FHAZ</option>
                <option value="RHAZ">RHAZ</option>
                <option value="CHEMCAM">CHEMCAM</option>
                <option value="MARDI">MARDI</option>
                <option value="NAVCAM">NAVCAM</option>
            </Select>
            {data.photos.map((item:any, index:any) => {
                if(item.camera.name === roverCamera) {
                    return (
                        <WeatherItem 
                            key={ index } 
                            item={ item } 
                        />
                    )
                }
                    return <div key={0}>No Camera Images found. . .</div>
                
            })}
        </Grid>
    )
};

export default RoverList;
