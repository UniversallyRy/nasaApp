import { Heading, Flex, HeadingProps, Text, useColorModeValue } from "@chakra-ui/react";
import MotionImage from "./Image";
import { motion } from "framer-motion";
import MotionBackGround from "./BackGround";
import { TypeAPOD } from '../../utils/types';
import { apodVariant } from "../../utils/variants";
import { Dispatch, SetStateAction } from 'react';

type Props = {
  newData: TypeAPOD
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Content = ({ newData, isOpen, setOpen }: Props) => {

  const MotionTitle = motion<HeadingProps>(Heading);
  const cardBg = useColorModeValue("blue.500", "purple.900");
  return (

    <Flex
      bg={cardBg}
      shadow="2xl"
      direction="column"
      borderRadius="sm"
      align="center"
      spacing={2}
      w={{
        base: "sm",
        sm: "md",
        md: "container.sm",
        lg: "container.lg",
        xl: "container.xl"
      }}
    >
      <MotionTitle
        fontSize={{
          base: "lg",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl"
        }}
        variants={apodVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
        m={2}
      >
        {newData.title}
      </MotionTitle>
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row"
        }}
        w="auto"
        bg="whiteAlpha.50"
        borderRadius="sm"
        cursor={isOpen ? "zoom-out" : "zoom-in"}
      >
        <MotionBackGround
          isOpen={isOpen}
          setOpen={setOpen}
        />
        <MotionImage
          data={newData}
          setOpen={setOpen}
          isOpen={isOpen}
        />
        <Text
          alignSelf="center"
          fontSize={{
            base: "14px",
            sm: "16px",
            md: "18px",
            lg: "18px",
            xl: "20px",
          }}
          lineHeight={["short", "tall"]}
          letterSpacing="wider"
          maxW={{
            base: "xs",
            sm: "sm",
            md: "lg",
            lg: "lg"
          }}
          m={2}
          wordBreak='break-word'
          overflowWrap='anywhere'
          hyphens='auto'
        >
          {newData.explanation}
        </Text>
      </Flex>

    </Flex>
  )
}
export default Content;
