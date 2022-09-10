import HeaderNav from './HeaderNav';
import { Box, Flex, chakra, useColorModeValue } from "@chakra-ui/react";

type Props = {
  children: JSX.Element
};

const Layout = ({ children }: Props) => {
  const backGround = useColorModeValue("teal.200", "green.900");

  return (
    <Flex direction="column" minH="100%" bg={backGround}>
      <HeaderNav />
      <Box flex={1}>
        <chakra.main>
          {children}
        </chakra.main>
      </Box>
    </Flex>
  )
};

export default Layout;
