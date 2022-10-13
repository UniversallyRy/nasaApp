import { MouseEventHandler } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

const MotionDiv = motion<BoxProps>(Box);

const BackGround = ({ ...props }: Props) => {
  const bgColor = useColorModeValue("purple.200", "blackAlpha.900");

  return (
    <MotionDiv
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg={bgColor}
      opacity={props.isOpen ? 1 : 0}
      pointerEvents={props.isOpen ? "auto" : "none"}
      cursor={props.isOpen ? "zoom-out" : "default"}
      onClick={props.onClose}
      animate={{ opacity: props.isOpen ? 1 : 0 }}
    />
  );
};

export default BackGround;
