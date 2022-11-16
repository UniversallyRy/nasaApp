import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { useAnimation } from "framer-motion";
import { APODDataType } from "../../utils/types";
import { reformatDate } from "../../utils/reformatDate";
import Placeholder from "../../public/placeholder.jpg"
import Image from "next/image";
type Props = {
  data: APODDataType;
  isOpen: boolean;
  setOpen: ((item?: boolean) => (MouseEventHandler<HTMLImageElement> | undefined)) | Dispatch<SetStateAction<boolean>>
}

//top={0}
//      left={0}
//      right={0}
//      bottom={0}
//      alignSelf="center"
//      borderRadius="sm"
//      objectFit="cover"
//      objectPosition="center"
//      animate={imgAnimation}
//      src={props.data.url}
//      onMouseMove={(e) => handleMouseMove(e)}
//      alt={"Picture for the date of " + `${reformatDate(props.data.date)}`}
export default function MotionImage({ ...props }: Props) {

  const { data, setOpen, isOpen } = props;

  const imgAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 40;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / (offsetFactor - 20),
    });
  };

  return (
    <Image
      animate={imgAnimation}
      className={`${isOpen
        ? "z-20 h-auto w-full min-h-full  object-center max-h-full max-w-full absolute cursor-default"
        : "z-auto h-full w-full m-1 max-h-max max-w-max relative cursor-zoom-in"
        } inset-0 border-sm object-cover`
      }
      width={600}
      height={300}
      src={data.url != undefined ? data.url : ""}
      onMouseMove={(e) => handleMouseMove(e)}
      alt={"Picture for the date of " + `${reformatDate(data.date)}`}
      onClick={() => setOpen(true)}
    />
  );
};
