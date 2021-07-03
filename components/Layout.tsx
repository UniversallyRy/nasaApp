import HeaderNav from './HeaderNav';
import { chakra, Flex } from "@chakra-ui/react";

const Layout = ({ children }:any) => {
    return (
        <>
            <HeaderNav/>
            <Flex align="center" justify="center">
                <chakra.main>
                    { children }
                </chakra.main>
            </Flex>
        </>
    )
}

export default Layout;
