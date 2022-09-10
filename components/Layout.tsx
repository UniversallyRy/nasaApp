import { Box, Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import NavBar from './NavBar/';

type Props = {
  children: JSX.Element
};

const Layout = ({ children }: Props) => {

  const backGround = useColorModeValue("teal.200", "green.900");
  return (
    <Flex minH="100vh" bg={backGround} direction="column">
      <NavBar />
      <Box flex={1}>
        <chakra.main>
          {children}
        </chakra.main>
      </Box>
    </Flex>
  )
};

export default Layout;
