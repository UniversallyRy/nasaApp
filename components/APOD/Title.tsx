import {
  Box,
  Heading,
  HeadingProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { apodVariant } from "../../utils/variants";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  const MotionTitle = motion<HeadingProps>(Heading);
  const bg = useColorModeValue("blue.500", "purple.900");
  return (
    <Box p={3} bg={bg}>
      <MotionTitle
        fontSize={{
          base: "lg",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
        }}
        variants={apodVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
        m={2}
      >
        {title}
      </MotionTitle>
    </Box>
  );
};

export default Title;
