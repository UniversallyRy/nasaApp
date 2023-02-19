import Image from "next/image";
import { RoverPhotoType } from "../../utils/types";

type Props = {
  item: RoverPhotoType;
  index: number;
  slidesCount: number;
};

const RoverItem = ({ ...props }: Props) => {
  return (
    <div className="w-fit font-bold text-2xl flex-none rounded-sm shadow-lg">
      <h1 className="ml-2 mt-7">Date Taken: {props.item.earth_date}</h1>
      <h1 className="m-2">Sol: {props.item.sol}</h1>
      <h1 className="m-2">Camera: {props.item.camera.name}</h1>
      <div className="flex flex-row relative">
        <h1 className="p-2 text-xs absolute top-0">
          {props.index + 1} / {props.slidesCount}
        </h1>
        <Image
          width="full"
          h={{ base: "60vh", sm: "70vh", md: "70vh" }}
          rounded="sm"
          shadow="sm"
          src={props.item.img_src}
          alt={`id + ${props.item.id}`}
        />
      </div>
    </div>
  );
};

export default RoverItem;
