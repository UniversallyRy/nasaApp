import HeaderNav from './HeaderNav';
import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }:any) => {
    const bg = useColorModeValue("teal.200", "green.900");

    return (
        <>
            <HeaderNav/>
            <Flex  bg={bg} align="center" justify="center">
                <chakra.main>
                    { children }
                </chakra.main>
            </Flex>
        </>
    )
}

export default Layout;
