import { GetStaticProps, NextPage } from 'next';
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MotionImage from "./Image";
import MotionBackGround from "./BackGround";
import { TypeAPOD } from '../../utils/types';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  newData: TypeAPOD
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Content = ({ newData, isOpen, setOpen }: Props) => {

  const cardBg = useColorModeValue("blue.500", "purple.900");
  return (

    <Stack
      bg={cardBg}
      shadow="2xl"
      borderRadius="sm"
      p={3}
      align="center"
      spacing={10}
      direction={{ base: "column", md: "row" }}
    >
      <Box
        w={["xs", "sm", "lg", "xl"]}
        bg="whiteAlpha.200"
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
      </Box>
      <Text
        fontSize={{ base: "11px", sm: "12px", lg: "13px" }}
        lineHeight={["short", "tall"]}
        letterSpacing="wider"
        maxW="xs"
        wordBreak='break-word'
        overflowWrap='anywhere'
        hyphens='auto'
      >
        {newData.explanation}
      </Text>
    </Stack>
  )
}
export default Content;
