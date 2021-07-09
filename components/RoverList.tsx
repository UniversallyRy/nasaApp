import WeatherItem from './RoverItem';
import { NextPage } from 'next';
import {useState} from 'react';
import { Grid, Select, Heading } from '@chakra-ui/react';


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
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
            </Select>
            <Heading> Images taken by the <a href="https://www.space.com/17963-mars-curiosity.html">Curiosity Rover</a></Heading>
            {data.photos.map((item:any, index:any) => {
                if(item.camera.name === roverCamera) {
                    return (
                        <WeatherItem 
                            key={ index } 
                            item={ item } 
                        />
                    )
                }
            })}
        </Grid>
    )
};

export default RoverList;
