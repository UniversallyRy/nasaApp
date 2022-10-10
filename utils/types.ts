// Type for Picture of the Day
export type APODDataType = {
  url?: string;
  title: string;
  explanation?: string;
  date: string;
  copyright?: string;
  hdurl?: string;
};

export type EpicDataType = {
  attitude_quaternions: {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
  };
  caption: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  coords: {
    attitude_quaternions: {
      q0: number;
      q1: number;
      q2: number;
      q3: number;
    };
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    dscovr_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    lunar_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    sun_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
  };
  date: string;
  dscovr_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  identifier: string;
  image: string;
  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  version: string;
  length: number;
};

// Type for Rover Cameras
export type RoverDataType = {
  photos: RoverPhotoType[];
  title: string;
  date: number;
  explanation: string;
  identifier: string;
  hdurl: string;
  map: (item: object) => void;
};

// Type for Rover Photos
export type RoverPhotoType = {
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
