import { MouseEventHandler } from "react";
import { Flex, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import MotionImage from "./Image";
import MotionBackGround from "./BackGround";
import { APODDataType } from "../../utils/types";

type Props = {
  newData: APODDataType;
};

export type DisclosureProps = {
  getButtonProps?: () => void;
  getDisclosureProps?: () => void;
  isControlled?: boolean;
  isOpen?: boolean;
  onClose?: MouseEventHandler<HTMLDivElement>;
  onOpen?: MouseEventHandler<HTMLDivElement>;
  onToggle?: MouseEventHandler<HTMLDivElement>;
};

const Content = ({ ...props }: Props) => {
  const handleImg = useDisclosure();
  const cardBg = useColorModeValue("blue.500", "purple.900");

  return (
    <Flex
      bg={cardBg}
      shadow="xl"
      direction="column"
      border="2px"
      borderColor="blackAlpha.100"
      borderRadius="sm"
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
        p={3}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <MotionBackGround
          isOpen={handleImg.isOpen}
          onClose={handleImg.onClose}
        />
        <MotionImage
          data={props.newData}
          isOpen={handleImg.isOpen}
          onOpen={handleImg.onOpen}
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
          {props.newData.explanation}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Content;
