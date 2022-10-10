// Type for Picture of the Day
export type TypeAPOD = {
  url?: string;
  title: string;
  explanation?: string;
  date: string;
  copyright?: string;
  hdurl?: string;
};

// Type for Rover Data
export type RoverProps = {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    name: string;
    launch_date: string;
    landing_date: string;
    status: string;
  };
  sol: number;
};

// Type for Satellite Image
export type CoordinateProps = {
  date: string;
  id: string;
  resource: {
    dataset: string;
    planet: string;
  };
  dataset: string;
  planet: string;
  service_version: string;
  url: string;
};
