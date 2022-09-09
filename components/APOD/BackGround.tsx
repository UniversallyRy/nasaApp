import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const MotionDiv = motion<BoxProps>(Box);

const BackGround = ({ isOpen, setOpen }: Props) => {

  const bgColor = useColorModeValue("rgba(232, 236, 241, 0.8)", "rgba(0, 0, 0, 0.95)");

  return (
    <MotionDiv
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      pointerEvents={isOpen ? "auto" : "none"}
      opacity={isOpen ? 1 : 0}
      bg={bgColor}
      animate={{ opacity: isOpen ? 1 : 0 }}
      onClick={() => setOpen(false)}
    />
  )
}

export default BackGround;
