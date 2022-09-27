import { Select, Heading } from '@chakra-ui/react';

type HeadingProps = {
  setCamera: (item: string) => void
};

const RoverHeading = ({ setCamera }: HeadingProps) => {
  const handleChange = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    setCamera(value);
  };
  return (
    <>
      <Select _focus={{ outline: "none" }} value="FHAZ" onChange={handleChange} placeholder="Select Camera">
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="MARDI">Mars Descent Imager</option>
        <option value="NAVCAM">Navigation Camera</option>
      </Select>
      <Heading> Images taken by the <a href="https://www.space.com/17963-mars-curiosity.html">Curiosity Rover</a></Heading>
    </>
  )
};

export default RoverHeading;
