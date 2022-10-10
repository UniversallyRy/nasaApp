import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import MotionImage from "./Image";
import MotionBackGround from "./BackGround";
import { TypeAPOD } from "../../utils/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  newData: TypeAPOD;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Content = ({ newData, isOpen, setOpen }: Props) => {
  const cardBg = useColorModeValue("blue.500", "purple.900");
  return (
    <Flex
      bg={cardBg}
      shadow="2xl"
      direction="column"
      border="1px"
      borderColor="blackAlpha.50"
      borderRadius="md"
      align="center"
      spacing={2}
      w={{
        base: "sm",
        sm: "md",
        md: "container.sm",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        w="auto"
        p={5}
        bg="whiteAlpha.50"
        borderRadius="sm"
        cursor={isOpen ? "zoom-out" : "zoom-in"}
      >
        <MotionBackGround isOpen={isOpen} setOpen={setOpen} />
        <MotionImage data={newData} setOpen={setOpen} isOpen={isOpen} />
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
          letterSpacing="wide"
          maxW={{
            base: "xs",
            sm: "sm",
            md: "lg",
            lg: "lg",
          }}
          m={2}
          wordBreak="break-word"
          overflowWrap="anywhere"
          hyphens="auto"
        >
          {newData.explanation}
        </Text>
      </Flex>
    </Flex>
  );
};
export default Content;
