import Image from "../Image";
import { reformatDate } from "../../utils/reformatDate";

type Props = {
  item: {
    title: string;
    image: string;
    date: string;
    caption: string;
    centroid_coordinates: {
      lat: string;
      lon: string;
    };
  };
  index: number;
  slidesCount: number;
};

const EpicItem = ({ ...props }: Props) => {
  const dateFormatter = props.item.date.slice(0, 10).split("-").join("/");
  const imageLink = `https://epic.gsfc.nasa.gov/archive/enhanced/${dateFormatter}/png/`;
  return (
    <div className="w-full h-full">
      <p className="absolute top-0 text-xs p-1 z-auto text-white">
        {props.index + 1} / {props.slidesCount}
      </p>
      <Image
        className="p-3 rounded-sm shadow-sm w-8/12 h-8/12 blur:placeholder"
        src={imageLink + props.item.image + `.png`}
        alt={props.item.title}
      />
      <div className="flex select-none bg-purple-900 flex-col absolute top-0 align-text-top w-1/2 mt-2 :md:mt-1">
        <p className="text-xs md:text-sm">
          Lat: {props.item.centroid_coordinates.lat}
        </p>
        <p className="text-xs md:text-sm">
          Date Taken: {reformatDate(props.item.date)}
        </p>
        <p className="m-2 text-xs md:text-md xl:text-xl">
          {props.item.caption}
        </p>
      </div>
    </div>
  );
};

export default EpicItem;
