import { Flex, Spacer, Text } from "@chakra-ui/react";
import { reformatDate } from "../../utils/reformatDate";
import { TypeAPOD } from "../../utils/types";

type Props = {
  picMeta: TypeAPOD
}
const Footer = ({ picMeta }: Props) => {

  return (
    <Flex>
      {!picMeta.copyright === undefined
        ? <Text fontSize={{ base: "10px", lg: "16px" }}>
          Copyright: {picMeta.copyright}
        </Text>
        : null
      }
    </Flex>
  )
}

export default Footer;
