import HeaderNav from './HeaderNav';
import { chakra, Stack, useColorModeValue } from "@chakra-ui/react";

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const backGround = useColorModeValue("teal.200", "green.900");

    return (
        <>
            <HeaderNav/>
            <Stack bg={backGround}>
                <chakra.main>
                    { children }
                </chakra.main>
            </Stack>
        </>
    )
}

export default Layout;
