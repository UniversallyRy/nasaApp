import NextImage from "../Image";
import { reformatDate } from "../../utils/reformatDate";
import { CoordinateProps } from "../../utils/types";

type Props = {
  coordinates: CoordinateProps;
};

export default function SatelliteImg({ coordinates }: Props) {
  return (
    <div className="m-2 w-full h-full shadow-xl rounded-sm p-1">
      <NextImage
        className="w-6/12 h-6/12"
        aria-label="Satellite Image"
        src={coordinates.url}
        alt={coordinates.resource.dataset}
      />
      <p className="m-2">Date Taken: {reformatDate(coordinates.date)} </p>
      <p className="m-2">Satellite: {coordinates.resource.dataset} </p>
    </div>
  );
}
