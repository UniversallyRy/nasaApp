import HeaderNav from './HeaderNav';
import { Box, Stack, chakra, useColorModeValue } from "@chakra-ui/react";

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const backGround = useColorModeValue("teal.200", "green.900");

    return (
        <Box>
            <HeaderNav/>
            <Stack bg={backGround}>
                <chakra.main>
                    { children }
                </chakra.main>
            </Stack>
        </Box>
    )
}

export default Layout;
