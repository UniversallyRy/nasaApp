import { Flex, Text } from "@chakra-ui/react";

type Props = {
  copyright: string | undefined;
};

const Footer = ({ ...props }: Props) => {
  return (
    <Flex>
      {!props.copyright === undefined ? (
        <Text fontSize={{ base: "10px", lg: "16px" }}>
          Copyright: {props.copyright}
        </Text>
      ) : null}
    </Flex>
  );
};

export default Footer;
