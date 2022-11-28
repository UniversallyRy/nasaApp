import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { reformatDate } from "../../utils/reformatDate";
import type { APODDataType } from "../../utils/types";
import Placeholder from "../../public/placeholder.jpg"

type Props = {
  data: APODDataType;
  isOpen: boolean;
  setOpen: ((item?: boolean) => (MouseEventHandler<HTMLImageElement> | undefined)) | Dispatch<SetStateAction<boolean>>
}

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
      className={`${isOpen
        ? "absolute self-center min-w-max min-h-max cursor-zoom-out"
        : "cursor-zoom-in"
        } border-sm border-gray-900/5 object-center shadow-md cursor-default`
      }
      width={500}
      height={500}
      src={data.url != undefined ? data.url : Placeholder}
      onMouseMove={(e) => handleMouseMove(e)}
      alt={"Picture for the date of " + `${reformatDate(data.date)}`}
      onClick={data.url != "" ? () => setOpen(true) : undefined}
    />
  );
};
