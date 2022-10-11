import { Image, ImageProps } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { MouseEventHandler } from "react";
import { reformatDate } from "../../utils/reformatDate";
import { APODDataType } from "../../utils/types";

type Props = {
  data: APODDataType;
  isOpen: boolean;
  onOpen: MouseEventHandler<HTMLDivElement>;
};

const AnimatedIMG = motion<ImageProps>(Image);

export const MotionImage = ({ ...props }: Props) => {
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
      zIndex={props.isOpen ? "docked" : "auto"}
      h={props.isOpen ? "auto" : "full"}
      w={props.isOpen ? "auto" : "full"}
      m={props.isOpen ? "auto" : "1"}
      maxH={props.isOpen ? "full" : "auto"}
      maxW={props.isOpen ? "full" : "auto"}
      pos={props.isOpen ? "absolute" : "relative"}
      cursor={props.isOpen ? "default" : "zoom-in"}
      objectFit="cover"
      objectPosition="center"
      animate={imgAnimation}
      src={props.data.url}
      onMouseMove={(e) => handleMouseMove(e)}
      onClick={props.onOpen}
      alt={"Picture for the date of " + `${reformatDate(props.data.date)}`}
    />
  );
};

export default MotionImage;
