import { Flex, Text } from "@chakra-ui/react";

type Props = {
  copyright: string | undefined;
};

const Footer = ({ copyright }: Props) => {
  return (
    <Flex>
      {!copyright === undefined ? (
        <Text fontSize={{ base: "10px", lg: "16px" }}>
          Copyright: {copyright}
        </Text>
      ) : null}
    </Flex>
  );
};

export default Footer;
