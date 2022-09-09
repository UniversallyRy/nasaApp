import { Stack, Text } from "@chakra-ui/react";
import { reformatDate } from "../../utils/reformatDate";
import { TypeAPOD } from "../../utils/types";

type Props = {
  picMeta: TypeAPOD
}
const Footer = ({ picMeta }: Props) => {

  return (
    <Stack>
      <Text
        fontSize={{ base: "14px", sm: "20px", lg: "28px" }}
      >
        Posted on
        <time> {reformatDate(picMeta.date)} </time>
      </Text>
      {!picMeta.copyright === undefined
        ? <Text fontSize={{ base: "6px", lg: "12px" }}>
          Copyright: {picMeta.copyright}
        </Text>
        : null
      }
    </Stack>
  )
}

export default Footer;
