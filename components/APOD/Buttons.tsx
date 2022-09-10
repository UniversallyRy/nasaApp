import { Flex, Spacer } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'


// `color` prop to change the icon color
//`boxSize` prop to change the icon size

const Buttons = () => {
  return (
    <Flex pb={3} direction="row">
      <ArrowLeftIcon w={6} h={6} />
      <Spacer />
      <ArrowRightIcon w={6} h={6} />
    </Flex>
  )
}

export default Buttons;
