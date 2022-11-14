import { AiFillHome } from "react-icons/ai";
import {
  Box,
  Flex,
  Button,
  CloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import NextLink from "next/link";

type Props = {
  mobileNav: {
    isOpen: boolean;
    onClose: () => void;
  };
};

const VButtons = ({ mobileNav }: Props) => {
  const backGround = useColorModeValue("gray.400", "gray.900");
  return (
    <Box alignItems="center" display={{ base: "inline-flex", lg: "none" }}>
      <Flex
        pos="absolute"
        zIndex="dropdown"
        top={3}
        right={3}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        alignSelf="center"
        alignItems="center"
        w="97%"
        pt={5}
        bg={backGround}
        space={3}
        rounded="md"
        shadow="sm"
      >
        <CloseButton
          mb={5}
          aria-label="Close menu"
          onClick={mobileNav.onClose}
        />
        <NextLink href="/" legacyBehavior>
          <Button w="full" size="lg" variant="ghost" leftIcon={<AiFillHome />}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/apod" legacyBehavior>
          <Button
            w="full"
            size="lg"
            variant="ghost"
            leftIcon={<BsFillImageFill />}
          >
            APoD
          </Button>
        </NextLink>
        <NextLink href="/landsat" legacyBehavior>
          <Button
            w="full"
            size="lg"
            variant="ghost"
            leftIcon={<FaSatelliteDish />}
          >
            Landsat
          </Button>
        </NextLink>
        <NextLink href="/epic" legacyBehavior>
          <Button
            w="full"
            size="lg"
            variant="ghost"
            leftIcon={<GiEarthAmerica />}
          >
            EPIC
          </Button>
        </NextLink>
        <NextLink href="/rover" legacyBehavior>
          <Button
            w="full"
            size="lg"
            variant="ghost"
            leftIcon={<BsFillImageFill />}
          >
            Rover Photos
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default VButtons;
