import HeaderNav from './HeaderNav';
import { chakra, Stack, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }:any) => {
    const bg = useColorModeValue("teal.200", "green.900");

    return (
        <>
            <HeaderNav/>
            <Stack bg={bg}>
                <chakra.main>
                    { children }
                </chakra.main>
            </Stack>
        </>
    )
}

export default Layout;
