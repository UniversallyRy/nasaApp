type Props = {
  setCamera: (item: string) => void;
};

const RoverSelect = ({ ...props }: Props) => {
  const handleChange = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    props.setCamera(value);
  };

  return (
    <div className="items-center">
      <select
        className="mt-1 focus:outline-none"
        onChange={handleChange}
        placeholder="Select Camera"
      >
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="MARDI">Mars Descent Imager</option>
        <option value="NAVCAM">Navigation Camera</option>
      </select>
      <h1>
        {" "}
        Images taken by the{" "}
        <a href="https://www.space.com/17963-mars-curiosity.html">
          Curiosity Rover
        </a>
      </h1>
    </div>
  );
};

export default RoverSelect;
