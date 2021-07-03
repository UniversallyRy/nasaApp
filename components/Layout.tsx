import Nav from './Nav';
import { chakra, Flex } from "@chakra-ui/react";

const Layout = ({ children }:any) => {
    return (
        <>
            <Nav/>
            <Flex align="center" justify="center">
                <chakra.main>
                    { children }
                </chakra.main>
            </Flex>
        </>
    )
}

export default Layout;
