import {
  Box,
  Heading,
  HeadingProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { apodVariant } from "../../utils/variants";

type Props = {
  title: string;
};

const Title = ({ ...props }: Props) => {
  const MotionTitle = motion<HeadingProps>(Heading);
  const bg = useColorModeValue("blue.500", "purple.900");
  return (
    <Box
      p={3}
      m={3}
      bg={bg}
      border="4px"
      borderColor="blackAlpha.50"
      borderRadius="md"
    >
      <MotionTitle
        fontSize={{
          base: "lg",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
        }}
        variants={apodVariant}
        //        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
        m={2}
      >
        {props.title}
      </MotionTitle>
    </Box>
  );
};

export default Title;
