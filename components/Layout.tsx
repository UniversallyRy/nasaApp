import Header from './Header';
import { chakra, Flex } from "@chakra-ui/react";

const Layout = ({ children }:any) => {
    return (
        <>
            <Header/>
            <Flex align="center" justify="center">
                <chakra.main>
                    { children }
                </chakra.main>
            </Flex>
        </>
    )
}

export default Layout;
