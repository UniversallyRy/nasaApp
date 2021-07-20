import HeaderNav from './HeaderNav';
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";

type Props = {
    children: JSX.Element
};

const Layout = ({ children }: Props) => {
    const backGround = useColorModeValue("teal.200", "green.900");

    return (
        <Box h={{base: "full",}} bg={backGround}>
            <HeaderNav/>
            <Box>
                <chakra.main>
                    { children }
                </chakra.main>
            </Box>
        </Box>
    )
};

export default Layout;
