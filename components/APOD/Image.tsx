import { Image, ImageProps } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { reformatDate } from "../../utils/reformatDate";
import { TypeAPOD } from "../../utils/types";

type Props = {
  data: TypeAPOD;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const AnimatedIMG = motion<ImageProps>(Image);

export const MotionImage = ({ data, setOpen, isOpen }: Props) => {
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
    <AnimatedIMG
      top={0}
      left={0}
      right={0}
      bottom={0}
      alignSelf="center"
      borderRadius="sm"
      zIndex={isOpen ? "docked" : "auto"}
      h={isOpen ? "auto" : "full"}
      w={isOpen ? "auto" : "full"}
      m={isOpen ? "auto" : "1"}
      maxH={isOpen ? "full" : "auto"}
      maxW={isOpen ? "full" : "auto"}
      pos={isOpen ? "absolute" : "relative"}
      objectFit="cover"
      objectPosition="center"
      animate={imgAnimation}
      src={data.url}
      onMouseMove={(e) => handleMouseMove(e)}
      onClick={() => setOpen(!isOpen)}
      alt={"Picture for the date of " + `${reformatDate(data.date)}`}
    />
  );
};

export default MotionImage;
