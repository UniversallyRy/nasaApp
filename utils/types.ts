export type TypeAPOD = {
  url?: string;
  title: string;
  explanation?: string;
  date: string;
  copyright?: string
  hdurl?: string
};

export type RoverProps = {
  camera: {
    full_name: string
    id: number
    name: string
    rover_id: number
  }
  earth_date: string
  id: number
  img_src: string
  rover: {
    id: number
    name: string
    launch_date: string
    landing_date: string
    status: string
  }
  sol: number
};
