import HeaderNav from './HeaderNav';
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const backGround = useColorModeValue("teal.200", "green.900");

    return (
        <>
            <HeaderNav/>
            <Box bg={backGround}>
                <chakra.main>
                    { children }
                </chakra.main>
            </Box>
        </>
    )
}

export default Layout;
